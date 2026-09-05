"use client";

interface ChartDisplayProps {
  questionText: string;
}

interface LoadChartRow {
  radius: string;
  gear1: string;
  gear2: string;
  gear3: string;
}

interface HoistChartRow {
  gear: string;
  maxLoad: string;
  speed: string;
}

function parseLoadChart(chartString: string): { rows: LoadChartRow[]; hookWeight: string } | null {
  const match = chartString.match(/LOAD CHART:\s*(.+?)\s*\(Hook block = (\d+)\s*kg\)/);
  if (!match) return null;
  const [, dataStr, hookWeight] = match;
  const rows: LoadChartRow[] = [];
  for (const seg of dataStr.split("|").map((s) => s.trim())) {
    const radiusMatch = seg.match(/(\d+)m→G1:(\d+)\/G2:(\d+)\/G3:(\d+)/);
    if (radiusMatch) {
      rows.push({
        radius: `${radiusMatch[1]} m`,
        gear1: formatNumber(radiusMatch[2]),
        gear2: formatNumber(radiusMatch[3]),
        gear3: formatNumber(radiusMatch[4]),
      });
    }
  }
  return rows.length > 0 ? { rows, hookWeight: `${hookWeight} kg` } : null;
}

function parseHoistChart(chartString: string): { rows: HoistChartRow[]; hookRigging: string } | null {
  const match = chartString.match(/HOIST CHART:\s*(.+?)\s*\|\s*Hook \+ rigging = (\d+)\s*kg/);
  if (!match) return null;
  const [, dataStr, hookRigging] = match;
  const rows: HoistChartRow[] = [];
  for (const seg of dataStr.split("|").map((s) => s.trim())) {
    const gearMatch = seg.match(/Gear (\d+) = ([\d,]+)\s*kg\s*\((\w+)\)/);
    if (gearMatch) {
      rows.push({
        gear: `Gear ${gearMatch[1]}`,
        maxLoad: `${gearMatch[2]} kg`,
        speed: gearMatch[3],
      });
    }
  }
  return rows.length > 0 ? { rows, hookRigging: `${hookRigging} kg` } : null;
}

function formatNumber(numStr: string): string {
  return parseInt(numStr, 10).toLocaleString() + " kg";
}

function extractQuestionText(fullText: string): string {
  const prefixes = [
    /LOAD CHART:.+?\(Hook block = \d+\s*kg\)\s*—\s*([\s\S]+)/,
    /HOIST CHART:.+?Hook \+ rigging = \d+\s*kg\s*—\s*([\s\S]+)/,
    /RIGGING ANGLE MULTIPLIERS:[^—]+—\s*([\s\S]+)/,
    /MATERIAL DENSITIES:[^—]+—\s*([\s\S]+)/,
    /PARTS OF LINE FORMULA:[^—]+—\s*([\s\S]+)/,
    /CAPACITY RULE:[^—]+—\s*([\s\S]+)/,
    /WIND REDUCTION FORMULA:[^—]+—\s*([\s\S]+)/,
    /SAIL AREA FORMULA:[^—]+—\s*([\s\S]+)/,
    /LIGHTNING DISTANCE:[^—]+—\s*([\s\S]+)/,
    /OVERLAP (?:RULE|FORMULA):[^—]+—\s*([\s\S]+)/,
    /CLEARANCE RULE:[^—]+—\s*([\s\S]+)/,
    /POWERLINE RULE:[^—]+—\s*([\s\S]+)/,
    /TOTAL LOAD RULE:[^—]+—\s*([\s\S]+)/,
    /OPERATOR RULE:[^—]+—\s*([\s\S]+)/,
  ];
  for (const re of prefixes) {
    const match = fullText.match(re);
    if (match) return match[1];
  }
  return fullText;
}

function parseConfigQuestion(text: string): { stem: string; bullets: string[] } | null {
  if (!text.includes("\n• ")) return null;
  const lines = text.split("\n");
  const stem = lines[0].trim();
  const bullets = lines
    .map((line) => line.trim())
    .filter((line) => line.startsWith("• "))
    .map((line) => line.slice(2).trim());
  if (!stem || bullets.length < 2) return null;
  return { stem, bullets };
}

function RuleBox({
  label,
  note,
  children,
}: {
  label: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="redtc-rulebox">
      <p className="mono steel">{label}</p>
      <div className="redtc-rulebox-body">{children}</div>
      {note ? <p className="steel">{note}</p> : null}
    </div>
  );
}

function QuestionStem({ text }: { text: string }) {
  return <h2 className="display redtc-q">{text}</h2>;
}

export function ChartDisplay({ questionText }: ChartDisplayProps) {
  const configQuestion = parseConfigQuestion(questionText);
  const loadChart = parseLoadChart(questionText);
  const hoistChart = parseHoistChart(questionText);
  const actualQuestion = extractQuestionText(questionText);

  if (configQuestion) {
    return (
      <div>
        <QuestionStem text={configQuestion.stem} />
        <div className="redtc-rulebox mt">
          <p className="mono steel">Configuration</p>
          <ul className="redtc-bullets">
            {configQuestion.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (questionText.startsWith("OPERATOR RULE:")) {
    return (
      <div>
        <RuleBox label="Operator rule">
          Control motion with the motor — hold position with the brake.
        </RuleBox>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (questionText.startsWith("OVERLAP RULE:") || questionText.startsWith("OVERLAP FORMULA:")) {
    const isFormula = questionText.startsWith("OVERLAP FORMULA:");
    return (
      <div>
        <RuleBox label={isFormula ? "Overlap formula" : "Overlap rule"}>
          {isFormula
            ? "Overlap = (Jib A + Jib B) − Tower Distance"
            : ">18 m (60 ft) overlap requires anti-collision"}
        </RuleBox>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (questionText.startsWith("CLEARANCE RULE:")) {
    return (
      <div>
        <RuleBox label="Clearance rule">Minimum 2 ft from structures</RuleBox>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (questionText.startsWith("POWERLINE RULE:")) {
    return (
      <div>
        <RuleBox label="Powerline rule" note="Higher voltages require greater distance.">
          Minimum 10 ft from lines under 50 kV
        </RuleBox>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (questionText.startsWith("TOTAL LOAD RULE:")) {
    return (
      <div>
        <RuleBox label="Total load">
          Max Load = Chart Capacity − Hook Block − Rigging
        </RuleBox>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (questionText.startsWith("SAIL AREA FORMULA:")) {
    return (
      <div>
        <RuleBox label="Sail area" note="Large flat loads act like sails in wind.">
          Area = Length × Width
        </RuleBox>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (questionText.startsWith("LIGHTNING DISTANCE:")) {
    return (
      <div>
        <RuleBox label="Lightning" note="Distance = Seconds ÷ 5">
          5 seconds between flash and thunder ≈ 1 mile
        </RuleBox>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (questionText.startsWith("WIND REDUCTION FORMULA:")) {
    return (
      <div>
        <RuleBox label="Wind reduction" note="20% reduction → multiply by 0.80">
          Safe Load = Chart Capacity × (1 − Reduction%)
        </RuleBox>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (questionText.startsWith("CAPACITY RULE:")) {
    return (
      <div>
        <RuleBox label="Capacity rule">
          Safe load is the lowest of radius capacity and gear/hoist capacity.
        </RuleBox>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (questionText.startsWith("PARTS OF LINE FORMULA:")) {
    return (
      <div>
        <RuleBox label="Parts of line" note="Total load = load + rigging + hook block">
          Line Tension = Total Load ÷ Parts of Line
        </RuleBox>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (questionText.startsWith("RIGGING ANGLE MULTIPLIERS:")) {
    return (
      <div>
        <div className="redtc-rulebox">
          <p className="mono steel">Rigging angle multipliers</p>
          <table className="redtc-table">
            <thead>
              <tr>
                <th>Sling angle</th>
                <th>Tension</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>90°</td>
                <td>1.0×</td>
              </tr>
              <tr>
                <td>60°</td>
                <td>1.15×</td>
              </tr>
              <tr>
                <td>45°</td>
                <td>1.41×</td>
              </tr>
              <tr>
                <td>30°</td>
                <td>2.0×</td>
              </tr>
            </tbody>
          </table>
        </div>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (questionText.startsWith("MATERIAL DENSITIES:")) {
    return (
      <div>
        <div className="redtc-rulebox">
          <p className="mono steel">Material densities</p>
          <table className="redtc-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Density</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Concrete</td>
                <td>2,400 kg/m³</td>
              </tr>
              <tr>
                <td>Steel</td>
                <td>7,850 kg/m³</td>
              </tr>
            </tbody>
          </table>
        </div>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (loadChart) {
    return (
      <div>
        <div className="redtc-rulebox">
          <p className="mono steel">Load chart · hook {loadChart.hookWeight}</p>
          <div className="redtc-table-wrap">
            <table className="redtc-table">
              <thead>
                <tr>
                  <th>Radius</th>
                  <th>Gear 1</th>
                  <th>Gear 2</th>
                  <th>Gear 3</th>
                </tr>
              </thead>
              <tbody>
                {loadChart.rows.map((row) => (
                  <tr key={row.radius}>
                    <td>{row.radius}</td>
                    <td>{row.gear1}</td>
                    <td>{row.gear2}</td>
                    <td>{row.gear3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  if (hoistChart) {
    return (
      <div>
        <div className="redtc-rulebox">
          <p className="mono steel">Hoist chart · hook + rigging {hoistChart.hookRigging}</p>
          <table className="redtc-table">
            <thead>
              <tr>
                <th>Gear</th>
                <th>Max load</th>
                <th>Speed</th>
              </tr>
            </thead>
            <tbody>
              {hoistChart.rows.map((row) => (
                <tr key={row.gear}>
                  <td>{row.gear}</td>
                  <td>{row.maxLoad}</td>
                  <td>{row.speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <QuestionStem text={actualQuestion} />
      </div>
    );
  }

  return <h2 className="display redtc-q redtc-q-pre">{questionText}</h2>;
}

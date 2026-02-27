import { useState } from "react";

import styles from "./styles.module.scss";

import { TextMorph } from "torph/react";

import { CodeBlock } from "../../components/codeblock";

import { Toggle, ToggleGroup } from "../../components/toggle";

const pkgCmds = {
  npm: "npm i web-haptics",
  pnpm: "pnpm i web-haptics",
  yarn: "yarn add web-haptics",
  bun: "bun i web-haptics",
};

export const InstallCommands = () => {
  const [cmdIndex, setCmdIndex] = useState(0);
  return (
    <div className={styles.install}>
      <div className={styles.toggleGroup}>
        <ToggleGroup>
          {Object.keys(pkgCmds).map((cmd, i) => (
            <Toggle
              key={cmd}
              active={i === cmdIndex}
              onClick={() => setCmdIndex(i)}
            >
              {cmd}
            </Toggle>
          ))}
        </ToggleGroup>
      </div>

      <div className={styles.cmd}>
        <CodeBlock
          code={pkgCmds[Object.keys(pkgCmds)[cmdIndex] as keyof typeof pkgCmds]}
        >
          <span
            style={{
              opacity: 0.4,
              userSelect: "none",
            }}
          >
            {"$ "}
          </span>
          <TextMorph>
            {pkgCmds[Object.keys(pkgCmds)[cmdIndex] as keyof typeof pkgCmds]}
          </TextMorph>
        </CodeBlock>
      </div>
    </div>
  );
};

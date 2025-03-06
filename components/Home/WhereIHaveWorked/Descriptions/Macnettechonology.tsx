import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Machnet() {
  const tasks = [
    {
      text: "Developed a transaction-based mobile application for international money transfers.",
      keywords: ["transaction-based", "mobile application", "money transfers"],
    },
    {
      text: "Worked as a React Native Developer at Machnet Technology, focusing on secure and efficient financial transactions.",
      keywords: [
        "React Native Developer",
        "Machnet Technology",
        "financial transactions",
      ],
    },
    {
      text: "Contributed to the development of apps like Trasfapay, Tranzak, and Moothot, ensuring seamless cross-border payments.",
      keywords: ["Trasfapay", "Tranzak", "Moothot", "cross-border payments"],
    },
    {
      text: "Optimized app performance and enhanced UI/UX for a better user experience.",
      keywords: ["performance optimization", "UI/UX"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            React Native Developer{" "}
            <span className="text-AAsecondary">@ Machnet Technology</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Dec 2023 – April 2024
            {/* Replace with actual dates */}
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description */}
          {tasks.map((item, index) => (
            <div key={index} className="flex flex-row space-x-2">
              <ArrowIcon className="h-5 w-4 text-AAsecondary flex-none" />
              <span
                className="text-gray-500 sm:text-sm text-xs"
                dangerouslySetInnerHTML={{
                  __html: getTasksTextWithHighlightedKeyword(
                    item.text,
                    item.keywords
                  ),
                }}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

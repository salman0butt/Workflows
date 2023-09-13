import {
    StartNodeDisplay,
    EndNodeDisplay,
    NodeDisplay,
    ConditionNodeDisplay
} from "../NodeDisplays";
import ConfigForm from "../ConfigForm";

export const registerNodes = [
    {
        type: 'start',
        name: 'start node',
        displayComponent: StartNodeDisplay,
        isStart: true,
    },
    {
        type: 'end',
        name: 'end node',
        displayComponent: EndNodeDisplay,
        isEnd: true,
    },
    {
        type: 'node',
        name: 'Action',
        displayComponent: NodeDisplay,
        configComponent: ConfigForm
    },
    {
        type: 'condition',
        name: 'condition node',
        displayComponent: ConditionNodeDisplay,
        configComponent: ConfigForm
    },
    {
        type: 'branch',
        name: 'condition',
        conditionNodeType: 'condition',
    },
];


export const defaultNodes = [
  {
    id: "node-0d9d4733-e48c-41fd-a41f-d93cc4718d97",
    type: "start",
    name: "Init",
    path: ["1"]
  },
  // {
  //   id: "node-b2ffe834-c7c2-4f29-a370-305adc03c010",
  //   type: "branch",
  //   name: "分支节点",
  //   children: [
  //     {
  //       id: "node-cf9c8f7e-26dd-446c-b3fa-b2406fc7821a",
  //       type: "condition",
  //       name: "Condition 1",
  //       children: [
  //         {
  //           id: "node-f227cd08-a503-48b7-babf-b4047fc9dfa5",
  //           type: "node",
  //           name: "Action1",
  //           path: ["1", "children", "0", "children", "0"]
  //         }
  //       ],
  //       path: ["1", "children", "0"]
  //     },
  //     {
  //       id: "node-9d393627-24c0-469f-818a-319d9a678707",
  //       type: "condition",
  //       name: "Condition 2",
  //       children: [],
  //       path: ["1", "children", "1"]
  //     }
  //   ],
  //   path: ["1"]
  // },
  // {
  //   id: "node-972401ca-c4db-4268-8780-5607876d8372",
  //   type: "node",
  //   name: "Action 2",
  //   path: ["2"]
  // },
  {
    id: "node-b106675a-5148-4a2e-aa86-8e06abd692d1",
    type: "end",
    name: "End",
    path: ["3"]
  }
];

let startDate = new Date("2022-01-11");
let calledDate = new Date("2022-02-22");
let holidays = [
  new Date("2022-01-01"),
  new Date("2022-04-15"),
  new Date("2022-04-18"),
  new Date("2022-05-01"),
  new Date("2022-05-26"),
  new Date("2022-06-06"),
  new Date("2022-06-16"),
  new Date("2022-10-03"),
  new Date("2022-11-01"),
  new Date("2022-12-25"),
  new Date("2022-12-26"),
];

function calculateSchedule(startDate, calledDate, topics, holidays) {
  const date = new Date(startDate);
  let workingDays = 0;

  while (date <= calledDate) {
    //check if date is saturday/sunday/holiday
    if (
      date.getDay() === 0 ||
      date.getDay() === 6 ||
      !!holidays.find((item) => {
        return item.getTime() == date.getTime();
      })
    ) {
      date.setDate(date.getDate() + 1);
    } else {
      workingDays++;
      date.setDate(date.getDate() + 1);
    }
  }

  let i = 0;

  while (workingDays > 0) {
    workingDays -= topics[i].days;
    i++;
  }
  console.log("topic: " + topics[i - 1].topic);
  return topics[i - 1].topic;
}

const topics = [
  { topic: "Warm Welcome + Bits and Bytes", days: 1 },
  { topic: "Your Frontend Developer Setup", days: 2 },
  { topic: "First Steps with Git", days: 1 },
  { topic: "HTML Foundation", days: 2 },
  { topic: "CSS Foundation", days: 4 },
  { topic: "Advanced CSS", days: 4 },
  { topic: "Next Steps with Git", days: 1 },
  { topic: "Checkpoint Web Dev Foundation", days: 1 },
  { topic: "Introduction to Programming with p5", days: 4 },
  { topic: "Solving Problems with JavaScript", days: 4 },
  { topic: "From Classes to Objects", days: 4 },
  { topic: "Checkpoint Coding Foundation", days: 1 },
  { topic: "Web App Basics", days: 5 },
  { topic: "Basic State Management", days: 2 },
  { topic: "Async", days: 1 },
  { topic: "Checkpoint Web App Basics", days: 1 },
  { topic: "Fetch and Http Requests", days: 3 },
  { topic: "Intro to Node.js and NPM", days: 2 },
  { topic: "Introduction to Restful APIs", days: 3 },
  { topic: "Checkpoint Restful Backends", days: 1 },
  { topic: "VueJS", days: 10 },
  { topic: "Checkpoint JueJS", days: 1 },
];

calculateSchedule(startDate, calledDate, topics, holidays);

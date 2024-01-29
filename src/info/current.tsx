type CurrentAssignment = {
  title: string;
  released: string;
  due: string;
  handoutLink: string | null;
  handinLink: string | null;
};

type CurrentStudio = {
  title: string;
  due: string;
  handoutLink: string | null;
  handinLink: string | null;
};

type Reading = {
  title: string;
  link: string;
};

const currAssignment: CurrentAssignment = {
  title: "Syllabus Quiz",
  released: "1/25",
  due: "1/30",
  handoutLink: null,
  handinLink:
    "https://docs.google.com/forms/d/e/1FAIpQLSeDFJ2LOvdYVfSOMWbGXuPH-rCgPvSqwQvfief1zoC_wjP9ug/viewform",
};

const currStudio: CurrentStudio = {
    title: "TBA",
    due: "TBA",
    handoutLink: null,
    handinLink: null
}

const readings: Reading[] = [
  {
    title: "Syllabus",
    link: "https://docs.google.com/document/d/1qvwOuIJ6BKtt3l-noSUTa553aQ1beHsMG6lk-qgg1Aw/edit?usp=drive_link",
  },
  {
    title: "Crash Course: GUI",
    link: "https://youtu.be/XIGSJshYb90?si=md_4UOZAGSlBffT2",
  },
  {
    title: "Portfolio Examples",
    link: "https://docs.google.com/document/u/0/d/1FCmpeWpO5cLG_-gXeaQ0CHRqi7bLWFm9EN6Dy-cklI8/edit",
  },
];

export {currAssignment, currStudio, readings}

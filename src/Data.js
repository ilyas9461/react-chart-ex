import { faker } from '@faker-js/faker';

export const studentsData = [
  {
    id: 1,
    name: "Nick",
    total: 1000,
    payments: [
      {
        id: 1,
        date: "2022-01-15",
        pay: 100,
      },
      {
        id: 2,
        date: "2022-02-15",
        pay: 100,
      },
      {
        id: 3,
        date: "2022-03-15",
        pay: 100,
      },
      {
        id: 4,
        date: "2022-04-15",
        pay: 100,
      },
    ],
  },
  {
    id: 2,
    name: "Albert",
    total: 1000,
    payments: [
      {
        id: 1,
        date: "2022-01-15",
        pay: 100,
      },
      {
        id: 2,
        date: "2022-02-15",
        pay: 100,
      },
      {
        id: 3,
        date: "2022-03-15",
        pay: 100,
      },
      {
        id: 4,
        date: "2022-04-15",
        pay: 100,
      },
      {
        id: 5,
        date: "2022-05-15",
        pay: 100,
      },
    ],
  },
  {
    id: 3,
    name: "Jane",
    total: 1000,
    payments: [
      {
        id: 1,
        date: "2022-01-15",
        pay: 100,
      },
      {
        id: 2,
        date: "2022-02-15",
        pay: 100,
      },
      {
        id: 3,
        date: "2022-03-15",
        pay: 100,
      },
      {
        id: 4,
        date: "2022-04-15",
        pay: 100,
      },
      {
        id: 5,
        date: "2022-05-15",
        pay: 100,
      },
      {
        id: 6,
        date: "2022-06-15",
        pay: 100,
      },
      {
        id: 7,
        date: "2022-07-15",
        pay: 100,
      },
      {
        id: 8,
        date: "2022-08-15",
        pay: 100,
      },
      {
        id: 9,
        date: "2022-09-15",
        pay: 100,
      },
      {
        id: 10,
        date: "2022-10-15",
        pay: 100,
      },
     
    ],
  },
  {
    id: 4,
    name: "David",
    total: 1000,
    payments: [
      {
        id: 1,
        date: "2022-01-15",
        pay: 100,
      },
      {
        id: 2,
        date: "2022-02-15",
        pay: 100,
      },
      {
        id: 3,
        date: "2022-03-15",
        pay: 100,
      },
      {
        id: 4,
        date: "2022-04-15",
        pay: 100,
      },
      {
        id: 5,
        date: "2022-05-15",
        pay: 100,
      },
      {
        id: 6,
        date: "2022-06-15",
        pay: 100,
      },
    ],
  },
  {
    id: 5,
    name: "Michael",
    total: 1000,
    payments: [
      {
        id: 1,
        date: "2022-01-15",
        pay: 100,
      },
      {
        id: 2,
        date: "2022-02-15",
        pay: 100,
      },
      {
        id: 3,
        date: "2022-03-15",
        pay: 100,
      },
      {
        id: 4,
        date: "2022-04-15",
        pay: 100,
      },
      {
        id: 5,
        date: "2022-05-15",
        pay: 100,
      },
    ],
  },
];

export const UserData = [
  {
    id: 1,
    month: "Jan",
    total: 850,
    user_paid: 85,
    user_remaining: 765,
  },
  {
    id: 2,
    month: "Feb",
    total: 850,
    user_paid: 85,
    user_remaining: 680,
  },
  {
    id: 3,
    month: "March",
    total: 850,
    user_paid: 85,
    user_remaining: 595,
  },
  {
    id: 4,
    month: "April",
    total: 850,
    user_paid: 85,
    user_remaining: 510,
  },
  {
    id: 5,
    month: "May",
    total: 850,
    user_paid: 85,
    user_remaining: 425,
  },
  {
    id: 6,
    month: "June",
    total: 850,
    user_paid: 85,
    user_remaining: 340,
  },
  {
    id: 7,
    month: "Jully",
    total: 850,
    user_paid: 85,
    user_remaining: 255,
  },
  {
    id: 8,
    month: "Augst",
    total: 850,
    user_paid: 0,
    user_remaining: 255,
  },
  {
    id: 9,
    month: "Sept",
    total: 850,
    user_paid: 85,
    user_remaining: 85,
  },
  {
    id: 10,
    manth: "Oct",
    total: 850,
    user_paid: 85,
    user_remaining: 85,
  },
  {
    id: 11,
    month: "Nov",
    total: 850,
    user_paid: 85,
    user_remaining: 0,
  },
  {
    id: 12,
    month: "Dec",
    total: 850,
    user_paid: 0,
    user_remaining: 0,
  },
];

export const cohortData = [
  {
    id: 1,
    code: "202201_DevOps",
    start: "2022-01-01",
    end: "2022-09-30",
    languageCode: "en",
    mainproduct: {
      id: 1,
      name: "AWS Solutions Architect & DevOps Engineering",
      short: "DevOps",
    },
  },
  {
    id: 2,
    code: "202203_DevOps",
    start: "2022-03-01",
    end: "2022-12-30",
    languageCode: "de",
    mainproduct: {
      id: 1,
      name: "AWS Solutions Architect & DevOps Engineering",
      short: "DevOps",
    },
  },
  {
    id: 3,
    code: "202206_DevOps",
    start: "2022-06-01",
    end: "2023-03-30",
    languageCode: "tr",
    mainproduct: {
      id: 1,
      name: "AWS Solutions Architect & DevOps Engineering",
      short: "DevOps",
    },
  },
  {
    id: 4,
    code: "202201_Fullstack",
    start: "2022-01-01",
    end: "2022-09-30",
    languageCode: "en",
    mainproduct: {
      id: 2,
      name: "Full Stack Development",
      short: "FullStack",
    },
  },
  {
    id: 5,
    code: "202203_Fullstack",
    start: "2022-03-01",
    end: "2022-12-30",
    languageCode: "de",
    mainproduct: {
      id: 2,
      name: "Full Stack Development",
      short: "FullStack",
    },
  },
  {
    id: 6,
    code: "202206_Fullstack",
    start: "2022-06-01",
    end: "2023-03-30",
    languageCode: "tr",
    mainproduct: {
      id: 2,
      name: "Full Stack Development",
      short: "FullStack",
    },
  },
];


console.log('faker :',  faker.datatype.array(3));

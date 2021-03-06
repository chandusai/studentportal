import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Student } from '../models/student';

export const STUDENTS: Student[] = [
  {
    id: 1,
    age: 23,
    name: 'Lucille',
    surName: ' Ruiz',
    averageGrade: 'B',
  },
  {
    id: 2,
    age: 27,
    name: 'Vaughan',
    surName: ' Thornton',
    averageGrade: 'B',
  },
  {
    id: 3,
    age: 34,
    name: 'Roach',
    surName: ' Hamilton',
    averageGrade: 'C',
  },
  {
    id: 4,
    age: 23,
    name: 'Jeanie',
    surName: ' Rhodes',
    averageGrade: 'C',
  },
  {
    id: 5,
    age: 20,
    name: 'Doreen',
    surName: ' Sullivan',
    averageGrade: 'A',
  },
  {
    id: 6,
    age: 33,
    name: 'Morrison',
    surName: ' Wood',
    averageGrade: 'D',
  },
  {
    id: 7,
    age: 33,
    name: 'Carver',
    surName: ' Cox',
    averageGrade: 'D',
  },
  {
    id: 8,
    age: 29,
    name: 'Cote',
    surName: ' Byers',
    averageGrade: 'A',
  },
  {
    id: 9,
    age: 26,
    name: 'Poole',
    surName: ' Frederick',
    averageGrade: 'A',
  },
  {
    id: 10,
    age: 37,
    name: 'Vicky',
    surName: ' Gibbs',
    averageGrade: 'A',
  },
  {
    id: 11,
    age: 32,
    name: 'Raymond',
    surName: ' Henry',
    averageGrade: 'C',
  },
  {
    id: 12,
    age: 32,
    name: 'Key',
    surName: ' Fitzgerald',
    averageGrade: 'B',
  },
  {
    id: 13,
    age: 40,
    name: 'Lillian',
    surName: ' Alexander',
    averageGrade: 'A',
  },
  {
    id: 14,
    age: 35,
    name: 'Bobbie',
    surName: ' Rocha',
    averageGrade: 'A',
  },
  {
    id: 15,
    age: 26,
    name: 'Logan',
    surName: ' Garcia',
    averageGrade: 'D',
  },
  {
    id: 16,
    age: 21,
    name: 'Briggs',
    surName: ' Cummings',
    averageGrade: 'A',
  },
  {
    id: 17,
    age: 22,
    name: 'Romero',
    surName: ' Whitaker',
    averageGrade: 'C',
  },
  {
    id: 18,
    age: 23,
    name: 'Chelsea',
    surName: ' Palmer',
    averageGrade: 'C',
  },
  {
    id: 19,
    age: 25,
    name: 'Koch',
    surName: ' Herring',
    averageGrade: 'C',
  },
  {
    id: 20,
    age: 22,
    name: 'Gilbert',
    surName: ' Hodges',
    averageGrade: 'D',
  },
  {
    id: 21,
    age: 36,
    name: 'Roslyn',
    surName: ' Sims',
    averageGrade: 'D',
  },
  {
    id: 22,
    age: 40,
    name: 'Sara',
    surName: ' Hunter',
    averageGrade: 'A',
  },
  {
    id: 23,
    age: 34,
    name: 'Diaz',
    surName: ' Alvarado',
    averageGrade: 'C',
  },
  {
    id: 24,
    age: 23,
    name: 'Clark',
    surName: ' Buck',
    averageGrade: 'C',
  },
  {
    id: 25,
    age: 33,
    name: 'Sosa',
    surName: ' Ingram',
    averageGrade: 'A',
  },
  {
    id: 26,
    age: 34,
    name: 'Lolita',
    surName: ' Morton',
    averageGrade: 'C',
  },
  {
    id: 27,
    age: 37,
    name: 'Ila',
    surName: ' Bird',
    averageGrade: 'A',
  },
  {
    id: 28,
    age: 32,
    name: 'Powell',
    surName: ' Bender',
    averageGrade: 'A',
  },
  {
    id: 29,
    age: 39,
    name: 'Vincent',
    surName: ' Munoz',
    averageGrade: 'D',
  },
  {
    id: 30,
    age: 22,
    name: 'Maggie',
    surName: ' Bartlett',
    averageGrade: 'D',
  },
  {
    id: 31,
    age: 35,
    name: 'Kate',
    surName: ' Richards',
    averageGrade: 'A',
  },
  {
    id: 32,
    age: 36,
    name: 'Rowland',
    surName: ' Mcintosh',
    averageGrade: 'A',
  },
  {
    id: 33,
    age: 36,
    name: 'Brandy',
    surName: ' Mccray',
    averageGrade: 'C',
  },
  {
    id: 34,
    age: 37,
    name: 'Nellie',
    surName: ' Smith',
    averageGrade: 'C',
  },
  {
    id: 35,
    age: 37,
    name: 'Martina',
    surName: ' Weaver',
    averageGrade: 'D',
  },
  {
    id: 36,
    age: 24,
    name: 'Delores',
    surName: ' King',
    averageGrade: 'B',
  },
  {
    id: 37,
    age: 38,
    name: 'Ramona',
    surName: ' Meadows',
    averageGrade: 'D',
  },
  {
    id: 38,
    age: 36,
    name: 'Latonya',
    surName: ' Casey',
    averageGrade: 'C',
  },
  {
    id: 39,
    age: 26,
    name: 'Williams',
    surName: ' Burch',
    averageGrade: 'B',
  },
  {
    id: 40,
    age: 37,
    name: 'Christie',
    surName: ' Branch',
    averageGrade: 'C',
  },
  {
    id: 41,
    age: 21,
    name: 'Isabella',
    surName: ' Whitley',
    averageGrade: 'C',
  },
  {
    id: 42,
    age: 22,
    name: 'Rita',
    surName: ' Roberts',
    averageGrade: 'D',
  },
  {
    id: 43,
    age: 23,
    name: 'Lang',
    surName: ' Pena',
    averageGrade: 'C',
  },
  {
    id: 44,
    age: 34,
    name: 'Natalia',
    surName: ' Rose',
    averageGrade: 'B',
  },
  {
    id: 45,
    age: 33,
    name: 'Jody',
    surName: ' Parsons',
    averageGrade: 'A',
  },
  {
    id: 46,
    age: 36,
    name: 'Patty',
    surName: ' Mcdonald',
    averageGrade: 'C',
  },
  {
    id: 47,
    age: 34,
    name: 'Flynn',
    surName: ' Mcbride',
    averageGrade: 'A',
  },
  {
    id: 48,
    age: 40,
    name: 'Monique',
    surName: ' Murray',
    averageGrade: 'A',
  },
  {
    id: 49,
    age: 33,
    name: 'Matthews',
    surName: ' Robinson',
    averageGrade: 'B',
  },
];

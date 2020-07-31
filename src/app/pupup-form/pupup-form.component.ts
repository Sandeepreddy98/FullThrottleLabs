import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

export interface DialogData {
 
}

@Component({
  selector: 'app-pupup-form',
  templateUrl: './pupup-form.component.html',
  styleUrls: ['./pupup-form.component.css'],
  providers: [MatDialogModule]
})
export class PupupFormComponent implements OnInit {
  public single1: any[] = [
    {
      "name": "Monday",
      "series": [
        {
          "name": "	Egon Spengler",
          "value": 8
        },
        {
          "name": "	Donald Trumph",
          "value": 7
        },
         {
          "name": "	Vladimir Putin",
          "value": 7.5
        },
        {
          "name": "		Narendra Modi",
          "value": 0
        },
         {
          "name": "		Kim John Un",
          "value": 6
        },
        {
          "name": "	Glinda Southgood",
          "value": 7.5
        },
  
      ]
    },
  
    {
      "name": "Tuesday",
      "series": [
        {
          "name": "	Egon Spengler",
          "value": 0
        },
        {
          "name": "	Donald Trumph",
          "value": 10
        },
         {
          "name": "	Vladimir Putin",
          "value": 7.5
        },
        {
          "name": "		Narendra Modi",
          "value": 10
        },
         {
          "name": "		Kim John Un",
          "value": 8
        },
        {
          "name": "	Glinda Southgood",
          "value": 6.5
        },
      ]
    },
  
    {
      "name": "Wednesday",
      "series": [
        {
          "name": "	Egon Spengler",
          "value": 10
        },
        {
          "name": "	Donald Trumph",
          "value": 5
        },
         {
          "name": "	Vladimir Putin",
          "value": 6.5
        },
        {
          "name": "		Narendra Modi",
          "value": 0
        },
         {
          "name": "		Kim John Un",
          "value": 9
        },
        {
          "name": "	Glinda Southgood",
          "value": 5.5
        },
      ]
    },
     {
      "name": "Thrusday",
      "series": [
      {
          "name": "	Egon Spengler",
          "value": 8.7
        },
        {
          "name": "	Donald Trumph",
          "value": 5
        },
         {
          "name": "	Vladimir Putin",
          "value": 9
        },
        {
          "name": "		Narendra Modi",
          "value": 10
        },
         {
          "name": "		Kim John Un",
          "value": 6
        },
        {
          "name": "	Glinda Southgood",
          "value": 0
        },
      ]
    },
     {
      "name": "Friday",
      "series": [
       {
          "name": "	Egon Spengler",
          "value": 10
        },
        {
          "name": "	Donald Trumph",
          "value": 6.7
        },
         {
          "name": "	Vladimir Putin",
          "value": 7.5
        },
        {
          "name": "		Narendra Modi",
          "value": 5
        },
         {
          "name": "		Kim John Un",
          "value": 0
        },
        {
          "name": "	Glinda Southgood",
          "value": 4.5
        },
      ]
    }

  ];

  public single: any[] = [
    {
   "name": "Egon Spengler",
   "series": [
     {
       "name": "15th July",
       "value": "8"
     },
     {
       "name": "16th July",
       "value": "7.8"
     },
     {
       "name": "17th July",
       "value": "9"
     },
     {
       "name": "18th July",
       "value": "7.5"
     },
     {
      "name": "19th July",
      "value": "8.2"
    },
    {
      "name": "20th July",
      "value": "7.6"
    },
    {
      "name": "21th July",
      "value": "9"
    },
    {
      "name": "22th July",
      "value": "7.5"
    },
    {
      "name": "23th July",
      "value": "8"
    },
    {
      "name": "24th July",
      "value": "7.8"
    },
    {
      "name": "25th July",
      "value": "9"
    },
    {
      "name": "26th July",
      "value": "7.5"
    },
    {
      "name": "27th July",
      "value": "8"
    },
    {
      "name": "28th July",
      "value": "7.8"
    },
    {
      "name": "29th July",
      "value": "9"
    },
    {
      "name": "30th July",
      "value": "7.5"
    },
    {
      "name": "31th July",
      "value": "8"
    },
  
   ],
 },
 {
   "name": "Donald Trumph",
   "series": [
    {
      "name": "15th July",
      "value": "10"
    },
    {
      "name": "16th July",
      "value": "0"
    },
    {
      "name": "17th July",
      "value": "6"
    },
    {
      "name": "18th July",
      "value": "7"
    },
    {
     "name": "19th July",
     "value": "6.2"
   },
   {
     "name": "20th July",
     "value": "8.6"
   },
   {
     "name": "21th July",
     "value": "8"
   },
   {
     "name": "22th July",
     "value": "7.3"
   },
   {
     "name": "23th July",
     "value": "8.8"
   },
   {
     "name": "24th July",
     "value": "6.8"
   },
   {
     "name": "25th July",
     "value": "9.5"
   },
   {
     "name": "26th July",
     "value": "9.5"
   },
   {
     "name": "27th July",
     "value": "6.5"
   },
   {
     "name": "28th July",
     "value": "6.8"
   },
   {
     "name": "29th July",
     "value": "9.8"
   },
   {
     "name": "30th July",
     "value": "9.5"
   },
   {
     "name": "31th July",
     "value": "3"
   },
   ],
 },
 {
   "name": "Vladimir Putin",
   "series": [
    {
      "name": "15th July",
      "value": "7"
    },
    {
      "name": "16th July",
      "value": "7.8"
    },
    {
      "name": "17th July",
      "value": "6"
    },
    {
      "name": "18th July",
      "value": "4.5"
    },
    {
     "name": "19th July",
     "value": "7"
   },
   {
     "name": "20th July",
     "value": "8.6"
   },
   {
     "name": "21th July",
     "value": "9.8"
   },
   {
     "name": "22th July",
     "value": "9.5"
   },
   {
     "name": "23th July",
     "value": "7.6"
   },
   {
     "name": "24th July",
     "value": "6.8"
   },
   {
     "name": "25th July",
     "value": "0"
   },
   {
     "name": "26th July",
     "value": "5.5"
   },
   {
     "name": "27th July",
     "value": "7.2"
   },
   {
     "name": "28th July",
     "value": "9.8"
   },
   {
     "name": "29th July",
     "value": "6.9"
   },
   {
     "name": "30th July",
     "value": "9"
   },
   {
     "name": "31th July",
     "value": "6"
   },
   ],
 },
 {
 "name": "Narendra Modi",
 "series": [
  {
    "name": "15th July",
    "value": "3"
  },
  {
    "name": "16th July",
    "value": "3.7"
  },
  {
    "name": "17th July",
    "value": "4.8"
  },
  {
    "name": "18th July",
    "value": "7.5"
  },
  {
   "name": "19th July",
   "value": "6.5"
 },
 {
   "name": "20th July",
   "value": "6.6"
 },
 {
   "name": "21th July",
   "value": "9"
 },
 {
   "name": "22th July",
   "value": "7.3"
 },
 {
   "name": "23th July",
   "value": "6.5"
 },
 {
   "name": "24th July",
   "value": "4.5"
 },
 {
   "name": "25th July",
   "value": "0"
 },
 {
   "name": "26th July",
   "value": "7"
 },
 {
   "name": "27th July",
   "value": "6.7"
 },
 {
   "name": "28th July",
   "value": "7"
 },
 {
   "name": "29th July",
   "value": "9.9"
 },
 {
   "name": "30th July",
   "value": "5.6"
 },
 {
   "name": "31th July",
   "value": "8.5"
 },
 ],
},
{
 "name": "Kim John Un",
 "series": [
  {
    "name": "15th July",
    "value": "9.5"
  },
  {
    "name": "16th July",
    "value": "6.8"
  },
  {
    "name": "17th July",
    "value": "9"
  },
  {
    "name": "18th July",
    "value": "9.5"
  },
  {
   "name": "19th July",
   "value": "4.2"
 },
 {
   "name": "20th July",
   "value": "5.6"
 },
 {
   "name": "21th July",
   "value": "8.8"
 },
 {
   "name": "22th July",
   "value": "8.5"
 },
 {
   "name": "23th July",
   "value": "9.5"
 },
 {
   "name": "24th July",
   "value": "6.8"
 },
 {
   "name": "25th July",
   "value": "0"
 },
 {
   "name": "26th July",
   "value": "7.6"
 },
 {
   "name": "27th July",
   "value": "7"
 },
 {
   "name": "28th July",
   "value": "7.8"
 },
 {
   "name": "29th July",
   "value": "7"
 },
 {
   "name": "30th July",
   "value": "0"
 },
 {
   "name": "31th July",
   "value": "6"
 },
 ],
},
{
 "name": "Glinda Southgood",
 "series": [
  {
    "name": "15th July",
    "value": "8.5"
  },
  {
    "name": "16th July",
    "value": "6.8"
  },
  {
    "name": "17th July",
    "value": "9.9"
  },
  {
    "name": "18th July",
    "value": "6.5"
  },
  {
   "name": "19th July",
   "value": "6.2"
 },
 {
   "name": "20th July",
   "value": "8.6"
 },
 {
   "name": "21th July",
   "value": "9.6"
 },
 {
   "name": "22th July",
   "value": "6.5"
 },
 {
   "name": "23th July",
   "value": "6.6"
 },
 {
   "name": "24th July",
   "value": "8.8"
 },
 {
   "name": "25th July",
   "value": "6"
 },
 {
   "name": "26th July",
   "value": "7.5"
 },
 {
   "name": "27th July",
   "value": "8"
 },
 {
   "name": "28th July",
   "value": "8.8"
 },
 {
   "name": "29th July",
   "value": "9.7"
 },
 {
   "name": "30th July",
   "value": "6.5"
 },
 {
   "name": "31th July",
   "value": "6"
 },
 ],
},
  

 ];
  ngOnInit() {

  }

//   constructor(
//     public dialogRef: MatDialogRef<PupupFormComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData
//     ) {
//       console.log(this.data)
//      }
// onSelect(event) {
//   console.log(event);
// }

  onNoClick(): void {
    // this.dialogRef.close();
  }
  

}
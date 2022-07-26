import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data = [
    {
      FishBone: [],
      MindMap: [],
      swot: [],
      DecisionMatrix: [
        {
          Id: 'dcd3593d-bd0a-4275-96dd-0c248e228216',
          Name: 'decision',
          createdDate: '2022-07-25T04:55:17.2152266Z',
          updatedDate: '2022-07-25T04:55:17.2152295Z',
          Organizer: {
            Email: 'nandana.sreeranj@m365x55081992.onmicrosoft.com',
            DisplayName: 'Nandana Sreeranj',
          },
        },
      ],
      Stakeholder: [],
      bpmn: [],
    },
    {
      FishBone: [
        {
          Id: '8cf1e240-a5a0-4859-9b62-5454dae019c4',
          Name: 'fishbone',
          createdDate: '2022-07-25T04:41:33.3665057Z',
          updatedDate: '2022-07-25T04:41:33.3665095Z',
          Organizer: {
            Email: 'nandana.sreeranj@m365x55081992.onmicrosoft.com',
            DisplayName: 'Nandana Sreeranj',
          },
        },
      ],
      MindMap: [
        {
          Id: 'fb82aeb3-a6a3-46d3-9260-d92ec017e80d',
          Name: 'MindMap-Agenda-1',
          createdDate: '2022-07-25T10:52:01.8304082Z',
          updatedDate: '2022-07-25T10:52:01.8304111Z',
          Organizer: {
            Email: 'benedict.alphonse@m365x55081992.onmicrosoft.com',
            DisplayName: 'Benedict Alphonse',
          },
        },
      ],
      swot: [],
      DecisionMatrix: [
        {
          Id: 'fb82aeb3-a6a3-46d3-9260-d92ec017e80d',
          Name: 'From-Agenda-1',
          createdDate: '2022-07-25T10:52:01.8304082Z',
          updatedDate: '2022-07-25T10:52:01.8304111Z',
          Organizer: {
            Email: 'benedict.alphonse@m365x55081992.onmicrosoft.com',
            DisplayName: 'Benedict Alphonse',
          },
        },
        {
          Id: 'c453175e-cbce-4191-9e7d-dad7510b161b',
          Name: 'From-Agd',
          createdDate: '2022-07-25T10:52:45.9659794Z',
          updatedDate: '2022-07-25T10:52:45.9659825Z',
          Organizer: {
            Email: 'benedict.alphonse@m365x55081992.onmicrosoft.com',
            DisplayName: 'Benedict Alphonse',
          },
        },
      ],
      Stakeholder: [],
      bpmn: [],
    },
  ];
  name = 'Angular';

  ngOnInit() {
    console.log('original-array', this.data);
  }

  mapData() {    
    let obj = {
      FishBone: [],
      MindMap: [],
      swot: [],
      DecisionMatrix: [],
      Stakeholder: [],
      bpmn: [],
    };

    this.data.map((a) => {
      if (a.FishBone.length > 0) {
        a.FishBone.forEach((f) => {
          obj.FishBone.push(f);
        });
      }
      if (a.MindMap.length > 0) {
        a.MindMap.forEach((m) => {
          obj.MindMap.push(m);
        });
      }
      if (a.swot.length > 0) {
        a.swot.forEach((s) => {
          obj.swot.push(s);
        });
      }
      if (a.DecisionMatrix.length > 0) {
        a.DecisionMatrix.forEach((d) => {
          obj.DecisionMatrix.push(d);
        });
      }
      if (a.Stakeholder.length > 0) {
        a.Stakeholder.forEach((h) => {
          obj.Stakeholder.push(h);
        });
      }
      if (a.bpmn.length > 0) {
        a.bpmn.forEach((b) => {
          obj.bpmn.push(b);
        });
      }
    });
    console.log('final-data', obj);
  }
}

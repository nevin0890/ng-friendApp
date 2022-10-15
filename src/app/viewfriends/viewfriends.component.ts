import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfriends',
  templateUrl: './viewfriends.component.html',
  styleUrls: ['./viewfriends.component.css']
})
export class ViewfriendsComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.fetchFriendList()
  }

  status:boolean=false
  
  fetchFriendList = () => {
    this.api.getFriendlist().subscribe((data: any) => { this.getFriends = data;  this.status = true })
   
  }
    
      getFriends:any =[]

  ngOnInit(): void {
  }

}

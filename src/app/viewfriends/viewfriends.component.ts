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
  
  fetchFriendList = () => {
    this.api.getFriendlist().subscribe((data: any) => { this.getFriends = data })
  }
    
      getFriends:any =[]

  ngOnInit(): void {
  }

}

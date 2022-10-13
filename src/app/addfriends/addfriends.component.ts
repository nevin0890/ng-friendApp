import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent implements OnInit {

  constructor(private api: ApiService) { }
  
  name = "salby"
  friendName = "virus"
  friendNickName = ""
  DescribeYourFriend = ""
  
  addFriend = () => {
    let data = {
      name: this.name,
      friendName: this.friendName,
      friendNickName: this.friendNickName,
      DescribeYourFriend: this.DescribeYourFriend,

    }
    this.api.addfrindList(data).subscribe((response: any) => {
      console.log(response)
      alert("Friend Added")
    })

  }


  ngOnInit(): void {
  }

}

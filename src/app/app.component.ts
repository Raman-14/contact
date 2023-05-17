import { Component, OnInit } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'contact';
  users: any;
  user: any;

  constructor(private usersData: UsersDataService, private http: HttpClient) {
    this.usersData.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    });
  }

  ngOnInit() {
    // this.postData();
  }

  popupVisible = 'hidePopup';
  showPopup() {
    this.popupVisible = 'showPopup';
  }
  hidePopup() {
    this.popupVisible = 'hidePopup';
  }

  postData(event: any) {
    event.preventDefault();
    console.log('Postdata calling');
    const firstName: any = document.getElementById('first');
    const lastName: any = document.getElementById('last');
    const email: any = document.getElementById('email');
    const user = {
      first_name: firstName.value,
      Last_name: lastName.value,
      email: email.value,
    };

    const response: any = this.usersData.postData(user).subscribe(
      (response: any) => {
        console.log('Post-Response', response);
        this.users.data.push(response);
        console.log(this.users.data);

        // Handle the response here
      },
      (error) => {
        console.error(error);

        // Handle errors here
      }
    );

    this.hidePopup();
  }
}

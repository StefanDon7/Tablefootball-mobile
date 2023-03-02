import {Component, OnInit} from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent implements OnInit {

  fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
  filteredFruits = this.fruits;
  searchTerm = '';

  constructor() {
  }

  ngOnInit() {
  }


  onFruitSelection(event: any) {
    console.log(event);
    // Handle the selected fruit
  }

  filterFruits() {
    this.filteredFruits = this.fruits.filter(fruit =>
      fruit.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  write(fruit: string) {
    console.log(fruit);
  }

  onSearchChange(searchTerm: string) {
    console.log(searchTerm);
  }
}

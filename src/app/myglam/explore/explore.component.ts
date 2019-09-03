import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from 'src/app/Categories.model';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  categories: Categorie[];
  constructor(private dataService: ConfigService){}
  
  ngOnInit(){
    
    return this.dataService.getCategories().subscribe(data => 
     { this.categories=data['data'];

      console.log(this.categories);});
    
  }

}

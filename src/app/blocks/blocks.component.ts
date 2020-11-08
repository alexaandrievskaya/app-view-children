import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {BlockItemComponent} from '../block-item/block-item.component';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  /* Декоратор используется для получения доступа ко всем дочерним компонентам
  указанного типа */
  @ViewChildren(BlockItemComponent)
  private blocks: QueryList<BlockItemComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  showAllBlocks(): void {
    this.blocks.forEach(block => block.show());
  }

}

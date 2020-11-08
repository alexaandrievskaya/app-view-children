import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {BlockItemComponent} from '../block-item/block-item.component';

@Component({
  selector: 'app-blocks-custom',
  templateUrl: './blocks-custom.component.html',
  styleUrls: ['./blocks-custom.component.scss']
})
export class BlocksCustomComponent implements OnInit {

  @ViewChildren(BlockItemComponent)
  private blocks: QueryList<BlockItemComponent>;

  /* Необходимо использовать декоратор ViewChild с именем компонента,
  указанным в разметке символом # */
  @ViewChild('selected')
  private selectedBlock: BlockItemComponent;

  constructor() { }

  ngOnInit(): void {
  }

  showSelectedBlock(): void {
    this.selectedBlock.show();
  }

  showAllBlocks(): void {
    this.blocks.forEach(block => block.show());
  }

}


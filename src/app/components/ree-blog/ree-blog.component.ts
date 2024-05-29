import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../model/Article';

@Component({
  selector: 'ree-blog',
  templateUrl: './ree-blog.component.html',
  styleUrl: './ree-blog.component.scss'
})
export class ReeBlogComponent {
  public articles: Article[] = [];

  constructor(private _router: Router) {
    this.articles = [
      new Article('article1idarticle1idarticle1id', 'Article 001', 'Davide Carità', 'May 29, 2024', this.lorem),
      new Article('article2idarticle2idarticle2id', 'Article 002', 'Davide Carità', 'May 29, 2024', this.lorem)
    ]
  }

  navigateToArticle(articleId: string) {
    this._router.navigate([`/article/${articleId}`]);
  }

  private lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra urna ut augue dictum, id tincidunt felis mollis. Nunc urna nisl, vehicula tincidunt efficitur sit amet, molestie vel arcu. Etiam a hendrerit nibh. Nam mi massa, commodo eget lacinia ut, feugiat eget diam. Praesent euismod nec sapien in maximus. Aenean scelerisque pulvinar tortor sed accumsan. Morbi et enim mauris. Lorem ipsum dolor sit amet, consectetur adipiscing. Nulla vitae aliquet justo, sit amet accumsan nulla. Curabitur tempor tellus eget nibh laoreet tincidunt. Suspendisse potenti. Praesent vitae lacinia eros, et tincidunt ipsum. Sed pulvinar urna leo, ut rutrum nulla vulputate vel. Duis pharetra in mi nec lobortis. Ut a ligula nec erat suscipit venenatis posuere placerat enim. Phasellus nunc eros, tincidunt eget sapien a, accumsan congue metus. Ut quam neque, aliquam vitae quam sed, egestas euismod libero. In at nibh placerat, bibendum risus id, iaculis diam. Morbi nec est tortor. Nunc vel ipsum magna. Curabitur vel diam nec dui pharetra sagittis in non leo. Quisque justo magna, convallis eget elit porta, hendrerit molestie tellus. Integer imperdiet enim sed diam aliquam, nec finibus mauris egestas. In tortor dolor, tempor sit amet mattis non, ornare at dolor. Cras viverra, enim a pretium posuere, sapien tellus fermentum dolor, vitae lacinia sapien quam sed lectus. Nulla pharetra molestie mauris sed vulputate. Integer volutpat ante vel massa ultrices gravida. Phasellus in feugiat ipsum. Sed placerat lorem nec sapien ultricies gravida. Nulla volutpat dapibus urna venenatis bibendum. Etiam vitae consequat nibh. Cras nec congue eros, nec pharetra purus. Maecenas a arcu tristique, placerat ex et, molestie orci. Vivamus nec orci euismod enim iaculis commodo. Pellentesque bibendum turpis ut volutpat porttitor. Nulla dolor ante, dapibus vel odio rhoncus, hendrerit lacinia nibh. Suspendisse efficitur, orci ut tincidunt efficitur, dui leo accumsan eros, pretium eleifend libero purus et nisl. Nunc commodo viverra mollis. Aenean ligula leo, ultricies ut ligula et, venenatis imperdiet purus. Suspendisse volutpat gravida purus id commodo. Donec vehicula molestie erat, sed accumsan tortor vulputate vitae. Donec consequat rhoncus sodales. Proin eu aliquet quam. Vestibulum placerat massa ornare, vehicula massa at, sollicitudin ipsum. Pellentesque nec est porta, suscipit est quis, pretium eros. Praesent malesuada diam vel massa tempor, nec vehicula metus tincidunt. Vivamus hendrerit ipsum eu ultricies faucibus. Donec dictum elit mi, non eleifend ligula facilisis ut. Vestibulum ac lorem lorem. Ut risus turpis, porttitor nec augue vitae, tristique egestas elit. Sed efficitur euismod blandit. Vivamus finibus ante sagittis est rhoncus, viverra varius mauris dictum.'
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
  const subject = encodeURIComponent('Portfolio Contact from ' + name);
  const body = encodeURIComponent(`Name: ${name}\n\n${message}`);
  window.location.href = `mailto:shujaatkhanumarkhan@gmail.com?subject=${subject}&body=${body}`;
  }
}

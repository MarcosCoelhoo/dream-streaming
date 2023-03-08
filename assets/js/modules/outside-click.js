export default class OutsideClick {
  constructor(element, events, callback) {
    this.element = element;
    this.events = events;
    this.callback = callback;
    this.html = document.documentElement;
    this.outside = "data-outside";

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick({ target }) {
    if (!this.element.contains(target)) {
      this.element.removeAttribute(this.outside);
      this.events.forEach((userEvents) => {
        this.html.removeEventListener(userEvents, this.handleOutsideClick);
      });
      this.callback();
    }
  }

  addEventsOutsideClick() {
    this.events.forEach((userEvents) => {
      setTimeout(() => {
        this.html.addEventListener(userEvents, this.handleOutsideClick);
      });

      this.element.setAttribute(this.outside, "");
    });
  }

  init() {
    if (!this.element.hasAttribute(this.outside)) {
      this.addEventsOutsideClick();
    }
    return this;
  }
}

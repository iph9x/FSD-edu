export default class RangeSlider {
  constructor() {
    this.$track = $('.range-slider__track');
    this.$circleLeft = $('.range-slider__circle_left');
    this.$circleRight = $('.range-slider__circle_right');
    this.$rangeInputLeft = $('.range-slider__input_left');
    this.$rangeInputRight = $('.range-slider__input_right');
    this.$rangeLabelLeft = $('.range-slider__label_left');
    this.$rangeLabelRight = $('.range-slider__label_right');
  }

  init() {
    if (this.$track.length > 0) {
      this.changeLeftBorder();
      this.changeRightBorder();
    }

    this.$rangeInputLeft.on('input change', (e) => this.changeLeftBorder(e));
    this.$rangeInputRight.on('input change', (e) => this.changeRightBorder(e));
  }

  changeLeftBorder(e) {
    const $leftInput = e ? $(e.target) : this.$rangeInputLeft;
    const currentInputValue = Number.parseInt($leftInput.val());
    const rightInputValue = Number.parseInt(this.$rangeInputRight.val()) - 1;
    const value = Math.min(currentInputValue, rightInputValue);
    const percent = this.getValueInPrecent($leftInput, value);

    this.$circleLeft.css('left', `${percent}%`);
    this.$track.css('left', `${percent}%`);
    this.$rangeLabelLeft.html(value);
    $leftInput.val(value);
  }

  changeRightBorder(e) {
    const $rightInput = e ? $(e.target) : this.$rangeInputRight;
    const currentInputValue = Number.parseInt($rightInput.val());
    const leftInputValue = Number.parseInt(this.$rangeInputLeft.val()) + 1;
    const value = Math.max(currentInputValue, leftInputValue);
    const percent = this.getValueInPrecent($rightInput, value);
    
    this.$circleRight.css('right', (100 - percent) + '%');
    this.$track.css('right', (100 - percent) + '%');
    this.$rangeLabelRight.html(value);
    $rightInput.val(value);
  }

  getValueInPrecent($input, value) {
    const min = Number.parseInt($input.attr('min'));
    const max = Number.parseInt($input.attr('max'));

    return ((value - min) / (max - min)) * 100;
  }
}

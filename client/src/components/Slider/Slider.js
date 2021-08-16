function Slider() {
    this.sldrRoot = document.querySelector('.slider')

    // Carousel objects
    this.sldrList = this.sldrRoot.querySelector('.slider-list');
    this.sldrElements = this.sldrList.querySelectorAll('.slider-item');
    this.sldrElemFirst = this.sldrList.querySelector('.slider-item');
    this.indicatorDots = this.sldrRoot.querySelector('.slider-nav');

    // Initialization
    this.options = Slider.defaults;
    Slider.initialize(this)
};

Slider.defaults = {
    loop: true,     // Бесконечное зацикливание слайдера
    auto: true,     // Автоматическое пролистывание
    interval: 5000, // Интервал между пролистыванием элементов (мс)
    dots: true      // Индикаторные точки
};

Slider.prototype.elemPrev = function(num) {
    num = num || 1;

    let prevElement = this.currentElement;
    this.currentElement -= num;
    if(this.currentElement < 0) this.currentElement = this.elemCount-1;
    
    this.sldrElements[this.currentElement].style.opacity = '1';
    this.sldrElements[prevElement].style.opacity = '0';

    if(this.options.dots) {
        this.dotOn(prevElement); this.dotOff(this.currentElement)
    }
};

Slider.prototype.elemNext = function(num) {
    num = num || 1;
    
    let prevElement = this.currentElement;
    this.currentElement += num;
    if(this.currentElement >= this.elemCount) this.currentElement = 0;


    this.sldrElements[this.currentElement].style.opacity = '1';
    this.sldrElements[prevElement].style.opacity = '0';

    if(this.options.dots) {
        this.dotOn(prevElement); this.dotOff(this.currentElement)
    }
};

Slider.prototype.dotOn = function(num) {
    this.indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;'
};

Slider.prototype.dotOff = function(num) {
    this.indicatorDotsAll[num].style.cssText = 'background-color:#33cc33; cursor:default;'
};

Slider.initialize = function(that) {
    // Constants
    that.elemCount = that.sldrElements.length; // Количество элементов
    // Variables
    that.currentElement = 0;
    let bgTime = getTime();
    // Functions
    function getTime() {
        return new Date().getTime();
    };
    function setAutoScroll() {
        that.autoScroll = setInterval(function() {
            let fnTime = getTime();
            if(fnTime - bgTime + 10 > that.options.interval) {
                bgTime = fnTime; that.elemNext()
            }
        }, that.options.interval)
    };

    // Start initialization
    if(that.elemCount <= 1) {   // Отключить навигацию
        that.options.auto = false; that.options.arrows = false; that.options.dots = false;
    };
    if(that.elemCount >= 1) {   // показать первый элемент
        that.sldrElemFirst.style.opacity = '1';
    };

    if(!that.options.loop) {
        that.options.auto = false; // отключить автопркрутку
    }
    else if(that.options.auto) {   // инициализация автопрокруки
        setAutoScroll();
        // Остановка прокрутки при наведении мыши на элемент
        that.sldrList.addEventListener('mouseenter', function() {clearInterval(that.autoScroll)}, false);
        that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
    };

    if(that.options.dots) {  // инициализация индикаторных точек
        let sum = '', diffNum;
        for(let i=0; i<that.elemCount; i++) {
            sum += '<span class="slider-nav-item"></span>'
        };
        that.indicatorDots.innerHTML = sum;
        that.indicatorDotsAll = that.sldrRoot.querySelectorAll('.slider-nav-item');
        // Назначаем точкам обработчик события 'click'
        for(let n=0; n<that.elemCount; n++) {
            that.indicatorDotsAll[n].addEventListener('click', function() {
                diffNum = Math.abs(n - that.currentElement);
                if(n < that.currentElement) {
                    bgTime = getTime(); that.elemPrev(diffNum)
                }
                else if(n > that.currentElement) {
                    bgTime = getTime(); that.elemNext(diffNum)
                }
                // Если n == that.currentElement ничего не делаем
            }, false)
        };
        that.dotOff(0);  // точка[0] выключена, остальные включены
        for(let i=1; i<that.elemCount; i++) {
            that.dotOn(i)
        }
    }
};

export default Slider;
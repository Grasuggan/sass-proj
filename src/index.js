$(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var navHeight = $(".primary-nav").outerHeight();
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - navHeight,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  $(".scroller").each(function () {
    // add data-animated="true" to every `.scroller` on the page
    $(this).attr("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = $(this).find(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children());

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach(function (item) {
      const duplicatedItem = $(item).clone(true);
      duplicatedItem.attr("aria-hidden", true);
      scrollerInner.append(duplicatedItem);
    });
  });
}

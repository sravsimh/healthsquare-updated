$.fn.commentCards = function () {
  return this.each(function () {
    var $this = $(this),
      $cards = $this.find(".card"),
      $current = $cards.filter(".card--current"),
      $next;

    // Function to show the next card
    function showNextCard() {
      $cards.removeClass("card--current card--out card--next");
      $current.addClass("card--out");
      $current = $current.next().length ? $current.next() : $cards.first();
      $current.addClass("card--current");
      $next = $current.next().length ? $current.next() : $cards.first();
      $next.addClass("card--next");
    }

    // Click event to show next card
    $cards.on("click", function () {
      if (!$current.is(this)) {
        showNextCard();
        resetTimeout();
      }
    });

    // Timeout function to automatically show next card after 2 seconds
    var timeout;

    function resetTimeout() {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        showNextCard();
        resetTimeout();
      }, 2000);
    }

    // Initialize timeout for automatic card switching
    resetTimeout();

    // Activate the first card initially
    if (!$current.length) {
      $current = $cards.first();
      $current.addClass("card--current");
      $current.next().addClass("card--next");
    }

    $this.addClass("cards--active");
  });
};

$(".cards").commentCards();

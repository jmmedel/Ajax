window.onscroll = function() {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;
  
    console.log('offset = ' + offset);
    console.log('height = ' + height);
  
    if (offset === height) {
      alert("Your at the bottom");
    }
  };

  
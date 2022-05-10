const searchFilter = () => {
  let searchbar, query, ul, li, h1, span, i, txtValue, none;
  searchbar = document.getElementById("searchbar");
  query = searchbar.value.toUpperCase();
  ul = document.getElementById("store-list");
  li = ul.getElementsByTagName("li");
  none = document.getElementById("none");

  // Loop through all list items, and hide those who don't match the search query
  let match = 0;
  for (i = 0; i < li.length; i++) {
    h1 = li[i].getElementsByTagName("h1")[0];
    span = h1.getElementsByTagName("span")[0];
    txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().includes(query)) {
      match++;
      li[i].style.display = "";
      none.style.display = "none";
    } else {
      match--;
      li[i].style.display = "none";

      if (match <= -li.length) { //match is -li.length -> there is no matches at all
        none.style.display = "";
      }
    }
  }
};

export default searchFilter;

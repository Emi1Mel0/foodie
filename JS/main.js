/*
        API Methods using the developer test key '1' as the API key

        Search meal by name
        https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

        List all meals by first letter
        https://www.themealdb.com/api/json/v1/1/search.php?f=a
        
        Lookup full meal details by id
        https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
        
        Lookup a single random meal
        https://www.themealdb.com/api/json/v1/1/random.php
        
        List all meal categories
        https://www.themealdb.com/api/json/v1/1/categories.php
        
        List all Categories, Area, Ingredients
        https://www.themealdb.com/api/json/v1/1/list.php?c=list
        https://www.themealdb.com/api/json/v1/1/list.php?a=list
        https://www.themealdb.com/api/json/v1/1/list.php?i=list
        
        Filter by main ingredient
        https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
        
        Filter by Category
        https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
        
        Filter by Area
        https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

        Images
        Meal Thumbnail Images
        Add /preview to the end of the meal image URL
        b/images/media/meals/llcbn01574260722.jpg/preview
        b/images/media/meals/llcbn01574260722.jpg/preview
        https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview
        
        Ingredient Thumbnail Images
        https://www.themealdb.com/images/ingredients/Lime.png
        https://www.themealdb.com/images/ingredients/Lime-Small.png
        
        categoryPart = $("categoryPart"),
        categoryPic = $("categoryPic"),
  categoryName = $("categoryName"),
  
  
  example how to select by jquery
  and set text inside it by jquery
  $(".garbage").html("Hello Wold");
  
  */

let apiResMain,
  ResMain,
  apiSearchByLit,
  ResSearchByLit,
  apiResSearchByName,
  ResSearchByName,
  apiResCategories,
  ResCategories,
  apiResArea,
  ResArea,
  apiResMealsCatos,
  ResMealsCatos,
  apiResDetails,
  ResDetails,
  apiResIngredients,
  ResIngredients;

// function openingSideBar() {
//   <i class="fa-solid open-close-icon fa-2x fa-x"></i>;
// }

$(".fourLayersIcon").click(function () {
  let OuterSideWidth = $(".outerPart").innerWidth();

  if ($(".outerPart").css("left") == "0px") {
    $(".outerPart").animate({ left: -OuterSideWidth }, 1000);
  } else {
    $(".outerPart").animate({ left: 0 }, 1000);
  }
});
function closingSideBar() { }

async function displayHomePage() {
  apiResMain = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  ResMain = await apiResMain.json();

  let cartona;

  for (let i = 0; i < 25; i++) {
    cartona += `
    <div class="col-sm-12 col-md-3">
      <div class="mainPart ">
        <figure class="
            mainPic
            position-relative
            overflow-hidden
            p-2 rounded-2">
          <img class="w-100"
            src = "${ResMain[i].strMealThumb}"
            alt="" />
          <figcaption class="
            mainInfo
            position-absolute ">
            <h3 class="" >${ResMain[i].strMeal}</h3>
          </figcaption>
        </figure>
      </div>
    </div>
`;

    $(".rowCategories").html(cartona);
  }

  console.log(displayMyCategories);
}

displayHomePage();

async function displaySearchByLit() { }

async function displaySearchByName() { }

/*
 */

async function displayMyCategories() {
  // ================================================================================== //
  // ============================== Categories API Part ============================== //
  // ================================================================================== //
  apiResCategories = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  ResCategories = await apiResCategories.json();
  console.log(ResCategories);

  let cartona;

  for (let i = 0; i < ResCategories.categories.length; i++) {
    cartona += `
    <div class="col-sm-12 col-md-3">
      <div class="categoryPart ${$("categoryPart").click(function (e) {
      e.preventDefault();
      console.log();
    })}">
      <figure class="
      categoryPic
      position-relative
      overflow-hidden
      p-2 rounded-2">
      <img class="w-100"
      src = "${ResCategories.categories[i].strCategoryThumb}"
      alt="" />
          <figcaption class="
          categoryInfo
          text-center
          position-absolute ">
          <h3 class="" >${ResCategories.categories[i].strCategory}</h3>
          <p class="p-3">${ResCategories.categories[i].strCategoryDescription
      }</p>
            </figcaption>
            </figure>
            </div>
            </div>
            
            `;

    $(".rowCategories").html(cartona);
    // ================================================================================== //
    // ============================== Meal Categories API Part ========================== //
    // ================================================================================== //

    apiResMealsCatos = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${ResCategories.categories[i].strCategory}`
    );
    ResMealsCatos = await apiResMealsCatos.json();
    console.log(ResMealsCatos);
  }
}

displayMyCategories();

async function displayArea() { }

/*
 */

async function displayIngredients() {
  // ================================================================================== //
  // ============================== Ingredients API Part ============================== //
  // ================================================================================== //

  apiResIngredients = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  ResIngredients = await apiResIngredients.json();
  console.log(ResIngredients);

  let cartona;

  // ${$(IngredientsPart).click(function (e) {
  //   //       e.preventDefault();
  //   //       console.log();
  //   //     })}

  // ================================================================================== //
  // =================== max length for each paragraph ================================ //
  // ================================================================================== //

  function truncateText(selector, maxLength) {
    let paraCut = document.querySelector(selector).innerText;

    if (paraCut.length > maxLength) {
      paraCut = paraCut.substr(0, maxLength) + "...";
    }
    return paraCut;
  }

  for (let i = 0; i < 20; i++) {
    cartona += `
    <div class="col-sm-12 col-md-3">
    <div class="IngredientsPart text-light">
        <figure class="
        IngredientsPic
        position-relative
        overflow-hidden
        rounded-2">
          <img class="IngredientIcon w-100"
          src = ""
          alt="" />
          <figcaption class="text-center">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3 class="" >${ResIngredients.meals[i].strIngredient}</h3>
            <p class="paragraph p-3">${ResIngredients.meals[i].strDescription}</p>
          </figcaption>
          </figure>
      </div>
      </div>
      
      `;
  }
  $(".rowIngredients").html(cartona);
  for (let i = 0; i < 20; i++) {
    cartona = "";
  }
  $(".paragraph").text(truncateText(".paragraph", 118));
}
displayIngredients();

// function displayIngredientsIcons() {}

// async function displayIngredients() {
//   // ================================================================================== //
//   // ============================== Ingredients API Part ============================== //
//   // ================================================================================== //

//   apiResIngredients = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
//   );
//   ResIngredients = await apiResIngredients.json();
//   console.log(ResIngredients);

//   let cartona;

//   // ${$(IngredientsPart).click(function (e) {
//     //   //       e.preventDefault();
//     //   //       console.log();
//     //   //     })}

//   // ================================================================================== //
//   // =================== max length for each paragraph ================================ //
//   // ================================================================================== //

//   // function truncateText(selector, maxLength) {
//   //   let paraCut = document.querySelector(selector).innerText;

//   //   if (paraCut.length > maxLength) {
//   //   paraCut = paraCut.substr(0, maxLength) + "...";
//   // }
//   // return paraCut;
// }

//   for (let i = 0; i < 20; i++) {
//     cartona += `
//     <div class="col-sm-12 col-md-3">
//     <div class="IngredientsPart text-light">
//     <figure class="
//     IngredientsPic
//         position-relative
//         overflow-hidden
//         rounded-2">
//         <img class="IngredientIcon w-100"
//         src = ""
//         alt="" />
//         <figcaption class="text-center">
//         <i class="fa-solid fa-drumstick-bite fa-4x"></i>
//         <h3 class="" >${ResIngredients.meals[i].strIngredient}</h3>
//             <p class="paragraph p-3">${ResIngredients.meals[i].strDescription}</p>
//             </figcaption>
//             </figure>
//       </div>
//   </div>

//   `;
// }
//   $(".rowIngredients").html(cartona);
//   for (let i = 0; i < 20; i++) {
//     cartona = "";
//   }
//   $("p").text(truncateText("p", 118));
// }

async function displayDetails() {
  // fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=");
}



// ===========================================================
// =========================================== VALIDATION PART
// ===========================================================

// // ===================== for name // done
// /^[A-Z a-z]{1,}$/gs

// // ===================== for email address // done
// /^[a-zA-Z0-9<|":;'[\]>{%+-?}(_=*&^%$#@!)]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/

// // ===================== for phone number // done
// /^01[0125][0-9]{8}$/gm

// // ===================== for age // done
// /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/

// // ===================== for password // done
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

/*

*/

let nameRegex = /^[A-Z a-z]{1,}$/gs;
let emailRegex =
  /^[a-zA-Z0-9<|":;'[\]>{%+-?}(_=*&^%$#@!)]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
let phoneNumberRegex = /^01[0125][0-9]{8}$/gm;
let ageRegex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

function displayContactUs() {
  $(".rowContactsUs").innerText = `
  <div id="" class="row w-75">
    <div class="col-sm-12 col-md-6 m-auto">
    <form action="">
      <input
        id="userName"
        type="name"
        class="text-capitalize mb-4 rounded-2 border w-100 form-control"
        placeholder="enter you name"
      />
      <p class="alert alert-danger d-none userNameAlert" role="alert">
        Special characters and numbers not allowed
      </p>
    </form>
  </div>
  <div class="col-sm-12 col-md-6 m-auto">
    <form action="">
      <input
        id="userEmail"
        type="email"
        class="text-capitalize mb-4 rounded-2 border w-100 form-control"
        placeholder="enter you email"
      />
      <p
        class="alert alert-danger d-none userEmailAlert"
        role="alert"
      >
        Email not valid *exemple@yyy.zzz
      </p>
    </form>
  </div>
  <div class="col-sm-12 col-md-6 m-auto">
    <form action="">
      <input
        id="userNamber"
        type="phoneNumber"
        class="text-capitalize mb-4 rounded-2 border w-100 form-control"
        placeholder="enter you phone number"
      />
      <p
        class="alert alert-danger d-none userNumberAlert"
        role="alert"
      >
        Enter valid Phone Number
      </p>
    </form>
  </div>
  <div class="col-sm-12 col-md-6 m-auto">
    <form action="">
      <input
        id="userAge"
        type="number"
        class="text-capitalize mb-4 rounded-2 border w-100 form-control"
        placeholder="enter you age"
      />
      <p class="alert alert-danger d-none userAgeAlert" role="alert">
        Enter valid age
      </p>
    </form>
  </div>
  <div class="col-sm-12 col-md-6 m-auto">
    <form action="">
      <input
        <input
        id="userPassword"
        type="password"
        class="text-capitalize mb-4 rounded-2 border w-100 form-control"
        placeholder="enter you password"
      />
      <p
        class="alert alert-danger d-none userPasswordAlert"
        role="alert"
      >
        Enter valid password
        <b>
          Minimum eight characters, at least one letter and one number
        </b>
      </p>
    </form>
  </div>
  <div class="col-sm-12 col-md-6 m-auto">
    <form>
      <input
        id="userConfirmPass"
        type="password"
        class="text-capitalize mb-4 rounded-2 border w-100 form-control"
        placeholder="confirm your password"
      />
      <p
        class="alert alert-danger d-none userConfirmPassAlert"
        role="alert"
      >
        the password does not match
      </p>
    </form>
  </div>
  <button
    type="submit"
    class="w-auto btn btn-outline-danger m-auto mt-2 disabled"
  >
    Submit
  </button>
</div>`;
}

displayContactUs();

function validateAllInputs() {
  if (
    nameRegex.test($("#userName").value) &&
    emailRegex.test($("#userEmail").value) &&
    phoneNumberRegex.test($("#userNamber").value) &&
    ageRegex.test($("#userAge").value) &&
    passwordRegex.test($("#userPassword").value) &&
    $("#userConfirmPass").value == $("#userPassword").value
  ) {
    $("button").removeClass("disabled");
  } else {
  }
}

function validName() {
  if (nameRegex.test($("#userName").value) == false) {
    $(".userNameAlert").removeClass("d-none");
  } else {
  }
}
function validEmail() {
  if (emailRegex.test($("#userEmail").value) == false) {
    $(".userEmailAlert").removeClass("d-none");
  } else {
  }
}
function validNumber() {
  if (phoneNumberRegex.test($("#userNamber").value) == false) {
    $(".userNumberAlert").removeClass("d-none");
  } else {
  }
}
function validAge() {
  if (ageRegex.test($("#userAge").value) == false) {
    $(".userAgeAlert").removeClass("d-none");
  } else {
  }
}
function validPassword() {
  if (passwordRegex.test($("#userPassword").value)) {
    $(".userPasswordAlert").removeClass("d-none");
  } else {
  }
}
function validConfirmPass() {
  if ($("#userConfirmPass").value !== $("#userPassword").value) {
    $(".userConfirmPassAlert").removeClass("d-none");
  } else {
  }
}

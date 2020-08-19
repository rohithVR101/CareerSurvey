Survey.StylesManager.applyTheme("modern");

Survey.Serializer.addProperty("page", {
  name: "navigationTitle:string",
  isLocalizable: true,
});
Survey.Serializer.addProperty("page", {
  name: "navigationDescription:string",
  isLocalizable: true,
});

var json = {
  title: "Survey form for Career Help!",
  pages: [
    {
      name: "page1",
      navigationTitle: "Basic Info",
      navigationDescription: "Your Basic Details",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink: "https://svgshare.com/i/Mzu.svg",
          imageFit: "contain",
          imageHeight: 726,
          imageWidth: 500,
          width: "600px",
        },
        {
          type: "panel",
          name: "basic-info",
          elements: [
            {
              type: "text",
              name: "first-name",
              title: "First Name",
              isRequired: true,
            },
            {
              type: "text",
              name: "last-name",
              title: "Last Name",
              isRequired: true,
            },
            {
              type: "text",
              name: "email-id",
              title: "E-Mail ID",
              isRequired: true,
              inputType: "email",
              placeHolder: "E-Mail ID",
            },
            {
              type: "text",
              name: "dob",
              title: "Date of Birth",
              isRequired: true,
              inputType: "date",
              max: "2002-12-31",
            },
          ],
          startWithNewLine: false,
        },
      ],
    },
    {
      name: "page2",
      navigationTitle: "Background",
      navigationDescription: "Education/Work",
      elements: [
        {
          type: "image",
          name: "second_page_image",
          imageLink: "https://svgshare.com/i/Myi.svg",
          imageFit: "contain",
          imageHeight: 726,
          imageWidth: 500,
          width: "600px",
        },
        {
          type: "panel",
          name: "background",
          elements: [
            {
              type: "dropdown",
              name: "education",
              title: "Highest Education",
              isRequired: true,
              choices: [
                {
                  value: "B.E/B.Tech",
                  text: "B.E/B.Tech",
                },
                {
                  value: "B.Sc.",
                  text: "B.Sc.",
                },
                {
                  value: "B.A.",
                  text: "B.A.",
                },
                {
                  value: "B.B.A",
                  text: "B.B.A",
                },
                {
                  value: "B.Com",
                  text: "B.Com",
                },
              ],
              hasOther: true,
              otherText: "Other",
            },
            {
              type: "text",
              name: "company-name",
              title: "Company Name",
              isRequired: true,
            },
            {
              type: "text",
              name: "designation",
              title: "Designation",
              isRequired: true,
            },
          ],
          startWithNewLine: false,
        },
      ],
    },
    {
      name: "page3",
      navigationTitle: "Skills",
      navigationDescription: "Your skill set",
      elements: [
        {
          type: "image",
          name: "third_page_image",
          imageLink: "https://svgshare.com/i/N0w.svg",
          imageFit: "contain",
          imageHeight: 726,
          imageWidth: 500,
          width: "600px",
        },
        {
          type: "panel",
          name: "skills",
          elements: [
            {
              type: "text",
              name: "current-skills",
              title:
                "Current Skills (use comma to separate values, do not type spaces):",
              isRequired: true,
            },
            {
              type: "text",
              name: "aspiring-skills",
              title:
                "Aspiring Skills (use comma to separate values, do not type spaces):",
              isRequired: true,
            },
          ],
          startWithNewLine: false,
        },
      ],
    },
    {
      name: "page4",
      navigationTitle: "Goal",
      navigationDescription: "Your Job Goal",
      elements: [
        {
          type: "image",
          name: "fourth_page_image",
          imageLink: "https://svgshare.com/i/N0F.svg",
          imageFit: "contain",
          imageHeight: 726,
          imageWidth: 500,
          width: "600px",
        },
        {
          type: "panel",
          name: "goal",
          elements: [
            {
              type: "text",
              name: "aspiring-role",
              title: "Aspiring Role",
              isRequired: true,
            },
            {
              type: "text",
              name: "dream-company",
              title: "Dream Company",
              isRequired: true,
            },
          ],
          startWithNewLine: false,
        },
      ],
    },
    {
      name: "page5",
      navigationTitle: "Want Help?",
      navigationDescription: "To get that dream job",
      elements: [
        {
          type: "image",
          name: "fifth_image",
          width: "600px",
          imageLink: "https://svgshare.com/i/N0G.svg",
          imageFit: "contain",
          imageHeight: 726,
          imageWidth: 500,
          width: "600px",
        },
        {
          type: "panel",
          name: "want-help",
          elements: [
            {
              type: "radiogroup",
              name: "confirm-help",
              title: "Can we help you with career trajectories?",
              isRequired: true,
              choices: [
                {
                  value: "True",
                  text: "Yes",
                },
                {
                  value: "False",
                  text: "No",
                },
              ],
            },
          ],
          startWithNewLine: false,
        },
      ],
    },
    {
      name: "page6",
      navigationTitle: "Join us",
      navigationDescription: "Become a member",
      elements: [
        {
          type: "image",
          name: "sixth_image",
          width: "600px",
          imageLink: "https://svgshare.com/i/Mz5.svg",
          imageFit: "contain",
          imageHeight: 726,
          imageWidth: 500,
          width: "600px",
        },
        {
          type: "panel",
          name: "want-help",
          elements: [
            {
              type: "radiogroup",
              name: "confirm-signup",
              title: "Would you like to create an Account with us?",
              isRequired: true,
              choices: [
                {
                  value: "True",
                  text: "Yes",
                },
                {
                  value: "False",
                  text: "No",
                },
              ],
            },
          ],
          startWithNewLine: false,
        },
      ],
      visible: false,
      visibleIf: "{confirm-help} = 'true'",
    },
    {
      name: "page7",
      navigationTitle: "Finish Signup",
      navigationDescription: "Create password",
      elements: [
        {
          type: "image",
          name: "seventh_image",
          width: "600px",
          imageLink: "https://svgshare.com/i/N0T.svg",
          imageFit: "contain",
          imageHeight: 726,
          imageWidth: 500,
          width: "600px",
        },
        {
          type: "panel",
          name: "finish-signup",
          elements: [
            {
              type: "text",
              name: "password",
              title: "Password",
              isRequired: true,
              validators: [
                {
                  type: "text",
                  text: "Password should be of minimum 8 characters long",
                  minLength: 8,
                  maxLength: -1,
                  allowDigits: true,
                },
              ],
              inputType: "password",
            },
          ],
          startWithNewLine: false,
        },
      ],
      visible: false,
      visibleIf: "{confirm-signup} = 'true'",
    },
  ],
  completeText: "Submit",
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function (result) {
     $.ajax({
       url: "/ajax/submit",
       type: "post",
       dataType: "json",
       contentType: "application/json",
       success: function (data) {
         console.log(data);
       },
       data: JSON.stringify(result.data, null, 3),
     });
});

$("#surveyElement").Survey({ model: survey });

var navTopEl = document.querySelector("#surveyNavigationTop");
navTopEl.className = "navigationContainer";
var leftImg = document.createElement("img");
leftImg.src = "https://img.icons8.com/flat_round/64/000000/arrow-left.png";
leftImg.style = "width: 16px; height: 16px";
leftImg.className = "navigationProgressbarImage";
navTopEl.appendChild(leftImg);
var navProgBarDiv = document.createElement("div");
navProgBarDiv.className = "navigationProgressbarDiv";
navTopEl.appendChild(navProgBarDiv);
var navProgBar = document.createElement("ul");
navProgBar.className = "navigationProgressbar";
navProgBarDiv.appendChild(navProgBar);
leftImg.onclick = function () {
  navProgBarDiv.scrollLeft -= 70;
};
var liEls = [];
for (var i = 0; i < survey.visiblePageCount; i++) {
  var liEl = document.createElement("li");
  if (survey.currentPageNo == i) {
    liEl.classList.add("current");
  }
  liEl.onclick = (function (index) {
    return function () {
      if (survey["isCompleted"]) return;
      liEls[survey.currentPageNo].classList.remove("current");
      if (index < survey.currentPageNo) {
        survey.currentPageNo = index;
      } else if (index > survey.currentPageNo) {
        var j = survey.currentPageNo;
        for (; j < index; j++) {
          if (survey.visiblePages[j].hasErrors(true, true)) break;
          if (!liEls[j].classList.contains("completed")) {
            liEls[j].classList.add("completed");
          }
        }
        survey.currentPageNo = j;
      }
      liEls[survey.currentPageNo].classList.add("current");
    };
  })(i);
  var pageTitle = document.createElement("span");
  if (!survey.visiblePages[i].navigationTitle) {
    pageTitle.innerText = survey.visiblePages[i].name;
  } else pageTitle.innerText = survey.visiblePages[i].navigationTitle;
  pageTitle.className = "pageTitle";
  liEl.appendChild(pageTitle);
  var br = document.createElement("br");
  liEl.appendChild(br);
  var pageDescription = document.createElement("span");
  if (!!survey.visiblePages[i].navigationDescription) {
    pageDescription.innerText = survey.visiblePages[i].navigationDescription;
  }
  pageDescription.className = "pageDescription";
  liEl.appendChild(pageDescription);
  liEls.push(liEl);
  navProgBar.appendChild(liEl);
}
survey.onCurrentPageChanged.add(function (sender, options) {
  var oldIndex = options.oldCurrentPage.visibleIndex;
  var newIndex = options.newCurrentPage.visibleIndex;
  liEls[oldIndex].classList.remove("current");
  if (newIndex > oldIndex) {
    for (var i = oldIndex; i < newIndex; i++) {
      if (sender.visiblePages[i].hasErrors(true, true)) break;
      if (!liEls[i].classList.contains("completed")) {
        liEls[i].classList.add("completed");
      }
    }
  }
  liEls[newIndex].classList.add("current");
});
survey.onComplete.add(function (sender, options) {
  liEls[sender.currentPageNo].classList.remove("current");
  for (var i = 0; i < sender.visiblePageCount; i++) {
    if (survey.visiblePages[i].hasErrors(true, true)) break;
    if (!liEls[i].classList.contains("completed")) {
      liEls[i].classList.add("completed");
    }
  }
});
var rightImg = document.createElement("img");
rightImg.src = "https://img.icons8.com/flat_round/64/000000/arrow-right.png";
rightImg.style = "width: 16px; height: 16px";
rightImg.className = "navigationProgressbarImage";
rightImg.onclick = function () {
  navProgBarDiv.scrollLeft += 70;
};
navTopEl.appendChild(rightImg);

var updateScroller = setInterval(() => {
  if (navProgBarDiv.scrollWidth <= navProgBarDiv.offsetWidth) {
    leftImg.classList.add("hidden");
    rightImg.classList.add("hidden");
  } else {
    leftImg.classList.remove("hidden");
    rightImg.classList.remove("hidden");
  }
}, 100);

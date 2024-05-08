$(document).ready(function () {
  $(".icon-expand:nth-child(1)").click(function () {
    $(".body").html("");
    $(".body").css({
      "background-image": "url(../img/homenew.png)",
      width: "814px",
      height: "452px",
      transform: "translateX(0px)",
      transition: "all 0.4s ease",
    });
    $(".icon").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".body").html(`
        <video class="video" controls id="video" poster="../img/Thumbnail.png"></video> 
        `);
    $(".pdt-btns").hide();
    $(".spec-btns").hide();
    $(".bug").show();
    $(".da-btns").hide();
    $(".excel").hide();
    $(".omm-btns").hide();
    $(".tsg-btns").hide();
    $("#text-title").hide();
  });
  $(".icon-expand:nth-child(2)").click(function () {
    $(".body").html(`<form id="form">
          <div class="contact">
              <p>For any information or issues in the automation toolbox <br> Please feel free to contact</p>
              <ul>
                  <li>Thuyavan Tamilarasan(<font color= yellow>tamilt</font>)</li>
                  <li>Dineshkumar Krishnamoorthy(<font color= yellow>krishd6</font>)</li>
                  <li>Periodical XF team</li>
              </ul>
          </div>
      </form>`);
    $(".body").css({
      "background-image": "none",
      width: "814px",
      height: "452px",
      transform: "translateX(0px)",
      transition: "all 0.4s ease",
    });
    $(".icon").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".pdt-btns, .spec-btns").hide();
    $(".da-btns").hide();
    $("#text-title").hide();
    $(".bug").show();
    $(".excel").hide();
    $(".tsg-btns").hide();
    $(".omm-btns").hide();
    $(".video").hide();
  });
  $(".icon-expand:nth-child(3)").click(function () {
    $(".body").html(`<form id="form">
        <div class="info">
        <div class="names-title">
        <p>Automation tool box combines all the exisiting automations in SID into once place</p>
        <p>Thanks to all the individuals who have contributed</p>
        </div>
        <div class="names">
            <div class="name-align">
                <strong>Graphic Insert Tool</strong>
                <ul>
                    <li>Dineshkumar Krishnamoorthy</li>
                    <li>Sathesh Thanapaul</li>
                </ul>
            </div>
            <div class="name-align">
                <strong>Xref Insert Tool</strong>
                <ul>
                    <li>Kanakaraj Mayilswamy</li>
                    <li>Sathesh Thanapaul</li>
                </ul>
            </div>
            <div class="name-align">
                <strong>Steplist Creator Tool</strong>
                <ul>
                    <li>Kanakaraj Mayilswamy</li>
                    <li>Thuyavan Tamilarasan</li>
                </ul>
            </div>
            <div class="name-align">
                <strong>Metric Conversion Tool</strong>
                <ul>
                    <li>Paulvin Joseph</li>
                    <li>Zackriya Thajudeen</li>
                    <li>Prabhu Vijayan</li>
                </ul>
            </div>
            <div class="name-align">
                <strong>Prefix Update Tool</strong>
                <ul>
                    <li>Jarett Karnia</li> 
                </ul> 
            </div>
            <div class="name-align">
                <strong>Weight calculator Tool</strong>
                <ul>
                    <li>Gokul Raj Chandrasekaran</li> 
                </ul> 
            </div> 
            <div class="name-align">
                <strong>BookScan</strong>
                <ul>
                    <li>Simon Santhosh</li> 
                    <li>Thuyavan Tamilarasan</li> 
                </ul> 
            </div>                          
        </div>
    </div>
      </form>`);
    $(".body").css({
      "background-image": "none",
      width: "814px",
      height: "452px",
      transform: "translateX(0px)",
      transition: "all 0.4s ease",
    });
    $(".icon").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(0px)",
      transition: "transform 0.4s ease",
    });
    $(".pdt-btns, .spec-btns").hide();
    $(".da-btns").hide();
    $("#text-title").hide();
    $(".bug").show();
    $(".excel").hide();
    $(".tsg-btns").hide();
    $(".omm-btns").hide();
    $(".video").hide();
  });
  $(".bt:eq(0)").click(function () {
    $(".body").html(`<form id="form">
                  <div class="graphic-container">
                  <div class="gno">
                      <label class="gtitle">Graphic Number</label>
                      <input type="text" required placeholder="Enter Graphic Number" name="graphics">
                  </div>
                  <div class="gtype">
                      <div class="gtitle">Select Graphic Type</div>
                      <div class="gtype1">
                          <ul>
                              <li>
                                  <input type="radio" name="Graphic" value="0">
                                  <label>Page Wide</label>
                              </li>
                              <li>
                                  <input type="radio" name="Graphic" value="1">
                                  <label>Column Wide</label>
                              </li>
                              <li>
                                  <input type="radio" name="Graphic" value="2">
                                  <label>Full Page</label>
                              </li>
                              <li>
                                  <input type="radio" name="Graphic" value="3">
                                  <label>Fold out</label>
                              </li>
                              <li>
                                  <input type="radio" name="Graphic" value="4">
                                  <label>Full Page rotated</label>
                              </li>
                              <li>
                                  <input type="radio" name="Graphic" value="5">
                                  <label>Page Wide Rotated</label>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="submit">
                      <button type="submit" onclick="window.electronAPI.updateEvent('Graphic Insert')" id="btn">
                        <p id="btnText">Generate</p>
                        <div class="checked">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                          </svg>
                        </div>
                      </button>
                      <button type="reset">Clear</button>
                  </div>
              </div> 
            </form>`);
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function () {
        btn.classList.remove("active");
        btnText.innerHTML = "Generate";
      }, 3 * 1000);
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      const gSlice = formProps.graphics.slice(2, 3);
      const cvxTemplate = [
        [
          '<figure figure-style="page-wide" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
        [
          '<figure id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
        [
          '<figure figure-style="full-page" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
        [
          '<figure figure-style="foldout" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
        [
          '<figure figure-style="full-page-landscape" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
        [
          '<figure figure-style="page-wide-landscape" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cvx"/></figure>',
        ],
      ];
      const cnvTemplate = [
        [
          '<figure figure-style="page-wide" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cnv"/></figure>',
        ],
        [
          '<figure id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cnv"/></figure>',
        ],
        [
          '<figure figure-style="full-page" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cnv"/></figure>',
        ],
        [
          '<figure figure-style="foldout" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cnv"/></figure>',
        ],
        [
          '<figure figure-style="full-page-landscape" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cnv"/></figure>',
        ],
        [
          '<figure figure-style="page-wide-landscape" id="i06804732.',
          '"><graphic controlno="',
          '" href="x-wc://file=',
          '.cnv"/></figure>',
        ],
      ];
      if (gSlice >= 6) {
        const x = cvxTemplate[formProps.Graphic].join(
          formProps.graphics.toLowerCase().replace(/\s/g, "")
        );
        navigator.clipboard.writeText("");
        navigator.clipboard.writeText(x);
      } else {
        const x = cnvTemplate[formProps.Graphic].join(
          formProps.graphics.toLowerCase().replace(/\s/g, "")
        );
        navigator.clipboard.writeText("");
        navigator.clipboard.writeText(x);
      }
    });
    $(".submit button:nth-child(2)").click(function (e) {
      $("#form").trigger("reset");
    });
  });
  $(".bt:eq(1)").click(function () {
    $(".body").html(`<form id="form" class="xref">
        <div class="xref-container">
          <div class="xno">
                <div class="x-ref">
                    <label class="xtitle">IE Control Number</label>
                    <input type="text" required placeholder="Enter IE Control Number" name="IE">
                </div>
                <div class="x-ref1">
                    <label class="xtitle">ID Control Number</label>
                    <input type="text" required placeholder="Enter ID Control Number" name="ID">
                </div>
          </div>
          <div class="xtype">
                <div class="xtitle">Select Xref Tag Type</div>
                  <div class="xtype1">
                      <ul>
                          <li>
                              <input type="radio" name="XREF" value="0">
                              <label>Figure</label>
                          </li>
                          <li>
                              <input type="radio" name="XREF" value="1">
                              <label>Step</label>
                          </li>
                          <li>
                              <input type="radio" name="XREF" value="2">
                              <label>Footnote</label>
                          </li>
                          <li>
                              <input type="radio" name="XREF" value="3">
                              <label>Table</label>
                          </li>
                          <li>
                              <input type="radio" name="XREF" value="4">
                              <label>Section</label>
                          </li>
                      </ul>
                  </div>
                </div>
          <div class="xsubmit">
              <button type="submit" onclick="window.electronAPI.updateEvent('Xref Insert')" id="btn">
              <p id="btnText">Generate</p>
              <div class="checked">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                </svg>
              </div>
            </button>
              <button type="reset">Clear</button>
          </div>
        </div> 
            </form>`);
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function () {
        btn.classList.remove("active");
        btnText.innerHTML = "Generate";
      }, 3 * 1000);
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      const templates = [
        'Illustration <xref format="dita" href="#./IE.ID"scope="local" type="figure"></xref>',
        'Step <xref format="dita" href="#./IE.ID"scope="local" type="step"></xref>',
        '<xref format="dita" href="#./IE.ID"scope="local" type="fn"></xref>',
        'Table <xref format="dita" href="#./IE.ID"scope="local" type="table"></xref>',
        'Section <xref format="dita" href="#./IE.ID"scope="local" type="sect"></xref>',
      ];
      if (formProps.length <= 0) {
        alert("Please enter Graphic Control Number");
        return;
      }
      const w = templates[formProps.XREF].split("IE");
      const x = w.join(formProps.IE.toLowerCase().replace(/\s/g, ""));
      const y = x.split("ID");
      const z = y.join(formProps.ID.toLowerCase().replace(/\s/g, ""));
      navigator.clipboard.writeText("");
      navigator.clipboard.writeText(z);
    });
    $(".submit button:nth-child(2)").click(function (e) {
      $("#form").trigger("reset");
    });
  });
  $(".bt:eq(3)").click(function () {
    $(".body").html(`<form class="metric" id="form">
      <div class="metcontainer">
      <div class="toggle-container">
          <div class="toggle">
            <input type="checkbox" name="engtomet">
          </div>
          <div class="upright">
            <h3>Metric to English</h3>
          </div>
      </div>
        <div class="text">
          <div class="text-items"><p>Torque</p></div>
          <div class="text-items"><p>Length (mm)</p></div>
          <div class="text-items"><p>Length (cm)</p></div>
          <div class="text-items"><p>Weight</p></div>
          <div class="text-items"><p>Temperature</p></div>
          <div class="text-items"><p>Flow</p></div>
          <div class="text-items"><p>Pressure</p></div>
          <div class="text-items"><p>Volume</p></div>
        </div>
        <div class="metric-container">
          <div class="metric-items">
            <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value">
            <div class="plus">
              <span>&plusmn</span>
            </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol">
            <div class="note">
              <h3>Note: Mention <font color= #ebece3>ft/in</font> along with values (Eg: <font color= #ebece3>15ft/15in</font>)</h3>
            </div>
          </div>
          <div class="metric-items">
            <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value1">
            <div class="plus">
              <span>&plusmn</span>
            </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol1">
          </div>
          <div class="metric-items">
            <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value1a">
            <div class="plus">
              <span>&plusmn</span>
            </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol1a">
          </div>
          <div class="metric-items">
            <input type="text" placeholder="Enter value" name="value2" style="width:442px;">
          </div>
          <div class="metric-items">
            <input type="text" placeholder="Enter value" name="value3">
            <div class="plus">
              <span>&plusmn</span>
            </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol1b">
          </div>
          <div class="metric-items">
            <input type="text" placeholder="Enter value" name="value4">
            <div class="plus">
              <span>&plusmn</span>
            </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol1c">
          </div>
          <div class="metric-items">
            <input type="text" placeholder="Enter value" name="value5">
            <div class="plus">
              <span>&plusmn</span>
            </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol1d">
          </div>
          <div class="metric-items">
            <input type="text" name="value6" placeholder="Enter value" style="width:442px;">
          </div>
        </div>
        <div class="msubmit-da">
              <button type="submit" onclick="window.electronAPI.updateEvent('Metric conversion-PDT')" id="btn">
                <p id="btnText">Generate</p>
                <div class="checked">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                  </svg>
                </div>
            </button>
            <button type="reset">Clear</button>
      </div>
    </div>
    </form>`);
    $(".body").css("background-image", "none");
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function () {
        btn.classList.remove("active");
        btnText.innerHTML = "Generate";
      }, 3 * 1000);
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      let texttocopy;
      let unit_torque;
      let unit_length;
      if (formProps.value) {
        if (formProps.engtomet) {
          if (formProps.value.includes("in")) {
            formProps.value = formProps.value.replace("in", "");
            formProps.tol = formProps.tol.replace("in", "");
            formProps.cvalue = (formProps.value / 8.85074576738).toFixed(
              String(formProps.value).split(".")[1] &&
                String(formProps.value).split(".")[1].length
            );
            if (formProps.tol) {
              formProps.ctolvalue = (formProps.tol / 8.85074576738).toFixed(
                String(formProps.tol).split(".")[1] &&
                  String(formProps.tol).split(".")[1].length
              );
            }
            unit_torque = "in";
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
            }N.m</metric><english>${formProps.value} ${
              formProps.tol ? "± " + formProps.tol + " " : ""
            }${unit_torque}</english></unitsgrp>`;
          }
          if (formProps.value.includes("ft")) {
            formProps.value = formProps.value.replace("ft", "");
            formProps.tol = formProps.tol.replace("ft", "");
            formProps.cvalue = (formProps.value / 0.737562149277).toFixed(
              String(formProps.value).split(".")[1] &&
                String(formProps.value).split(".")[1].length
            );
            if (formProps.tol) {
              formProps.ctolvalue = (formProps.tol / 0.737562149277).toFixed(
                String(formProps.tol).split(".")[1] &&
                  String(formProps.tol).split(".")[1].length
              );
            }
            unit_torque = "ft";
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
            }N.m</metric><english>${formProps.value} ${
              formProps.tol ? "± " + formProps.tol + " " : ""
            }${unit_torque}</english></unitsgrp>`;
          }
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
            formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
          }N.m </metric><english>${formProps.value} ${
            formProps.tol ? "± " + formProps.tol + " " : ""
          }lb ${unit_torque}</english></unitsgrp>`;
        } else {
          if (formProps.value <= 34) {
            formProps.cvalue = (formProps.value * 8.85074576738).toFixed(
              String(formProps.value).split(".")[1] &&
                String(formProps.value).split(".")[1].length
            );
            if (formProps.tol) {
              formProps.ctolvalue = (formProps.tol * 8.85074576738).toFixed(
                String(formProps.tol).split(".")[1] &&
                  String(formProps.tol).split(".")[1].length
              );
            }
            unit_torque = "in";
          } else {
            formProps.cvalue = (formProps.value * 0.737562149277).toFixed(
              String(formProps.value).split(".")[1] &&
                String(formProps.value).split(".")[1].length
            );
            if (formProps.tol) {
              formProps.ctolvalue = (formProps.tol * 0.737562149277).toFixed(
                String(formProps.tol).split(".")[1] &&
                  String(formProps.tol).split(".")[1].length
              );
            }
            unit_torque = "ft";
          }
          texttocopy = `<unitsgrp><metric>${formProps.value} ${
            formProps.tol ? "± " + formProps.tol + " " : ""
          }N.m</metric><english>${formProps.cvalue} ${
            formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
          }lb ${unit_torque}</english></unitsgrp>`;
        }
      } else if (formProps.value1) {
        if (formProps.engtomet) {
          if (formProps.value1.includes(".") && formProps.tol1.includes(".")) {
            formProps.cvalue = (formProps.value1 / 0.03937007874).toFixed(
              String(formProps.value1).split(".")[1] &&
                String(formProps.value1).split(".")[1].length - 1
            );
            formProps.ctolvalue = (formProps.tol1 / 0.03937007874).toFixed(
              String(formProps.tol1).split(".")[1] &&
                String(formProps.tol1).split(".")[1].length - 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }mm</metric><english>${formProps.value1} ${
              Number(formProps.tol1) ? "± " + formProps.tol1 + " " : ""
            }inch</english></unitsgrp>`;
          } else {
            inputDecimal = formProps.value1.includes(".")
              ? formProps.value1
              : formProps.value1 + ".0";
            tolDecimal = formProps.tol1.includes(".")
              ? formProps.tol1
              : formProps.tol1 + ".0";
            formProps.cvalue = (inputDecimal / 0.03937007874).toFixed(
              String(inputDecimal).split(".")[1] &&
                String(inputDecimal).split(".")[1].length - 1
            );
            formProps.ctolvalue = (tolDecimal / 0.03937007874).toFixed(
              String(tolDecimal).split(".")[1] &&
                String(tolDecimal).split(".")[1].length - 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }mm</metric><english>${inputDecimal} ${
              Number(tolDecimal) ? "± " + tolDecimal + " " : ""
            }inch</english></unitsgrp>`;
            console.log(formProps.tol);
          }
        } else {
          if (formProps.value1.includes(".") && formProps.tol1.includes(".")) {
            formProps.cvalue = (formProps.value1 * 0.03937007874).toFixed(
              String(formProps.value1).split(".")[1] &&
                String(formProps.value1).split(".")[1].length + 1
            );
            formProps.ctolvalue = (formProps.tol1 * 0.03937007874).toFixed(
              String(formProps.tol1).split(".")[1] &&
                String(formProps.tol1).split(".")[1].length + 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.value1} ${
              Number(formProps.tol1) ? "± " + formProps.tol1 + " " : ""
            }mm</metric><english>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }inch</english></unitsgrp>`;
          } else {
            inputDecimal = formProps.value1.includes(".")
              ? formProps.value1
              : formProps.value1 + ".0";
            tolDecimal = formProps.tol1.includes(".")
              ? formProps.tol1
              : formProps.tol1 + ".0";
            formProps.cvalue = (inputDecimal * 0.03937007874).toFixed(
              String(inputDecimal).split(".")[1] &&
                String(inputDecimal).split(".")[1].length + 1
            );
            formProps.ctolvalue = (tolDecimal * 0.03937007874).toFixed(
              String(tolDecimal).split(".")[1] &&
                String(tolDecimal).split(".")[1].length + 1
            );
            texttocopy = `<unitsgrp><metric>${inputDecimal} ${
              Number(tolDecimal) ? "± " + tolDecimal + " " : ""
            }mm</metric><english>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }inch</english></unitsgrp>`;
          }
        }
      } else if (formProps.value1a) {
        if (formProps.engtomet) {
          if (
            formProps.value1a.includes(".") &&
            formProps.tol1a.includes(".")
          ) {
            formProps.cvalue = (formProps.value1a / 0.39370079).toFixed(
              String(formProps.value1a).split(".")[1] &&
                String(formProps.value1a).split(".")[1].length - 1
            );
            formProps.ctolvalue = (formProps.tol1a / 0.39370079).toFixed(
              String(formProps.tol1a).split(".")[1] &&
                String(formProps.tol1a).split(".")[1].length - 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }mm</metric><english>${formProps.value1a} ${
              Number(formProps.tol1a) ? "± " + formProps.tol1a + " " : ""
            }inch</english></unitsgrp>`;
          } else {
            inputDecimal = formProps.value1a.includes(".")
              ? formProps.value1a
              : formProps.value1a + ".0";
            tolDecimal = formProps.tol1a.includes(".")
              ? formProps.tol1a
              : formProps.tol1a + ".0";
            formProps.cvalue = (inputDecimal / 0.39370079).toFixed(
              String(inputDecimal).split(".")[1] &&
                String(inputDecimal).split(".")[1].length - 1
            );
            formProps.ctolvalue = (tolDecimal / 0.39370079).toFixed(
              String(tolDecimal).split(".")[1] &&
                String(tolDecimal).split(".")[1].length - 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }mm</metric><english>${inputDecimal} ${
              Number(tolDecimal) ? "± " + tolDecimal + " " : ""
            }inch</english></unitsgrp>`;
          }
        } else {
          if (
            formProps.value1a.includes(".") &&
            formProps.tol1a.includes(".")
          ) {
            formProps.cvalue = (formProps.value1a * 0.39370079).toFixed(
              String(formProps.value1a).split(".")[1] &&
                String(formProps.value1a).split(".")[1].length + 1
            );
            formProps.ctolvalue = (formProps.tol1a * 0.39370079).toFixed(
              String(formProps.tol1a).split(".")[1] &&
                String(formProps.tol1a).split(".")[1].length + 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.value1a} ${
              Number(formProps.tol1a) ? "± " + formProps.tol1a + " " : ""
            }cm</metric><english>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }inch</english></unitsgrp>`;
          } else {
            inputDecimal = formProps.value1a.includes(".")
              ? formProps.value1a
              : formProps.value1a + ".0";
            tolDecimal = formProps.tol1a.includes(".")
              ? formProps.tol1a
              : formProps.tol1a + ".0";
            formProps.cvalue = (inputDecimal * 0.39370079).toFixed(
              String(inputDecimal).split(".")[1] &&
                String(inputDecimal).split(".")[1].length + 1
            );
            formProps.ctolvalue = (tolDecimal * 0.39370079).toFixed(
              String(tolDecimal).split(".")[1] &&
                String(tolDecimal).split(".")[1].length + 1
            );
            texttocopy = `<unitsgrp><metric>${inputDecimal} ${
              Number(tolDecimal) ? "± " + tolDecimal + " " : ""
            }cm</metric><english>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }inch</english></unitsgrp>`;
          }
        }
      } else if (formProps.value2) {
        if (formProps.engtomet) {
          formProps.cvalue = (formProps.value2 / 2.20462262).toFixed(
            String(formProps.value2).split(".")[1] &&
              String(formProps.value2).split(".")[1].length
          );
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} kg</metric><english>${formProps.value2} lb</english></unitsgrp>`;
        } else {
          formProps.cvalue = (formProps.value2 * 2.20462262).toFixed(
            String(formProps.value2).split(".")[1] &&
              String(formProps.value2).split(".")[1].length
          );
          texttocopy = `<unitsgrp><metric>${formProps.value2} kg</metric><english>${formProps.cvalue} lb</english></unitsgrp>`;
        }
      } else if (formProps.value3) {
        if (formProps.engtomet) {
          formProps.cvalue = (
            (formProps.value3 - 32) *
            0.555555555555556
          ).toFixed(
            String(formProps.value3).split(".")[1] &&
              String(formProps.value3).split(".")[1].length
          );
          if (formProps.tol1b) {
            formProps.ctolvalue = (
              (formProps.tol1b - 32) *
              0.555555555555556
            ).toFixed(
              String(formProps.tol1b).split(".")[1] &&
                String(formProps.tol1b).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          } °C</metric><english>${formProps.value3} ${
            Number(formProps.tol1b) ? "± " + formProps.tol1b + " " : ""
          }°F</english></unitsgrp>`;
        } else {
          formProps.cvalue = (formProps.value3 * 1.8 + 32).toFixed(
            String(formProps.value3).split(".")[1] &&
              String(formProps.value3).split(".")[1].length
          );
          if (formProps.tol1b) {
            formProps.ctolvalue = (formProps.tol1b * 1.8 + 32).toFixed(
              String(formProps.tol1b).split(".")[1] &&
                String(formProps.tol1b).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.value3} ${
            Number(formProps.tol1b) ? "± " + formProps.tol1b + " " : ""
          }°C</metric><english>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }°F</english></unitsgrp>`;
        }
      } else if (formProps.value4) {
        if (formProps.engtomet) {
          formProps.cvalue = (formProps.value4 * 3.785412).toFixed(
            String(formProps.value4).split(".")[1] &&
              String(formProps.value4).split(".")[1].length
          );
          if (formProps.tol1c) {
            formProps.ctolvalue = (formProps.tol1c * 3.785412).toFixed(
              String(formProps.tol1c).split(".")[1] &&
                String(formProps.tol1c).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }US gpm</metric><english>${formProps.value4} ${
            Number(formProps.tol1c) ? "± " + formProps.tol1c + " " : ""
          }L/min</english></unitsgrp>`;
        } else {
          formProps.cvalue = (formProps.value4 * 0.264172).toFixed(
            String(formProps.value4).split(".")[1] &&
              String(formProps.value4).split(".")[1].length
          );
          if (formProps.tol1c) {
            formProps.ctolvalue = (formProps.tol1c * 0.264172).toFixed(
              String(formProps.tol1c).split(".")[1] &&
                String(formProps.tol1c).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.value4} ${
            Number(formProps.tol1c) ? "± " + formProps.tol1c + " " : ""
          }L/min</metric><english>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }US gpm</english></unitsgrp>`;
        }
      } else if (formProps.value5) {
        if (formProps.engtomet) {
          formProps.cvalue = (formProps.value5 * 6.89475727999991).toFixed(
            String(formProps.value5).split(".")[1] &&
              String(formProps.value5).split(".")[1].length
          );
          if (formProps.tol1d) {
            formProps.ctolvalue = (formProps.tol1d * 6.89475727999991).toFixed(
              String(formProps.tol1d).split(".")[1] &&
                String(formProps.tol1d).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }kPa</metric><english>${formProps.value5} ${
            Number(formProps.tol1d) ? "± " + formProps.tol1d + " " : ""
          }psi</english></unitsgrp>`;
        } else {
          formProps.cvalue = (formProps.value5 * 0.14503773800722).toFixed(
            String(formProps.value5).split(".")[1] &&
              String(formProps.value5).split(".")[1].length
          );
          if (formProps.tol1d) {
            formProps.ctolvalue = (formProps.tol1d * 0.14503773800722).toFixed(
              String(formProps.tol1d).split(".")[1] &&
                String(formProps.tol1d).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.value5} ${
            Number(formProps.tol1d) ? "± " + formProps.tol1d + " " : ""
          }kPa</metric><english>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }psi</english></unitsgrp>`;
        }
      } else if (formProps.value6) {
        if (formProps.engtomet) {
          formProps.cvalue = (formProps.value6 * 3.78541).toFixed(
            String(formProps.value6).split(".")[1] &&
              String(formProps.value6).split(".")[1].length
          );
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} L</metric><english>${formProps.value6} US gal</english></unitsgrp>`;
        } else {
          formProps.cvalue = (formProps.value6 * 0.264172).toFixed(
            String(formProps.value6).split(".")[1] &&
              String(formProps.value6).split(".")[1].length
          );
          texttocopy = `<unitsgrp><metric>${formProps.value6} L</metric><english>${formProps.cvalue} US gal</english></unitsgrp>`;
        }
      }
      navigator.clipboard.writeText("");
      navigator.clipboard.writeText(texttocopy);
    });
    $(".bt1 button:nth-child(2)").click(function (e) {
      $("#form").trigger("reset");
      $(".upright h3").text("Metric to English");
      $(".upright h3").css("color", "#999999");
      $(".note h3").css("display", "none");
      $(".toggle input").attr("checked", false);
    });
    $(".toggle input").change(function (e) {
      if ($(this).is(":checked")) {
        $(".upright h3").text("English to Metric");
        $(".upright h3").css("color", "#565946");
        $(".note h3").css("display", "block");
        $(".toggle input").attr("checked", true);
      } else {
        $(".upright h3").text("Metric to English");
        $(".upright h3").css("color", "#999999");
        $(".note h3").css("display", "none");
        $(".toggle input").attr("checked", false);
      }
    });
  });
  $(".bt:eq(4)").click(function () {
    $(".body").html("");
    $(".body").css("background-image", "url(../img/main_page_low.png)");
  });
  $(".bt:eq(5)").click(function () {
    $(".excel").show();
    $(".body").html(`<form id="form">
              <div class="exceltip">Click excel icon to download Research sheet template.</div>
              <div class="spec">
                  <div class=".textarea"><textarea required placeholder="Paste PDF content here"></textarea></div>
                  <div class=".textarea"><textarea required placeholder="Paste Excel content here"></textarea></div>
                  <div class="ssubmit">
                  <button type="submit" onclick="window.electronAPI.updateEvent('BookScan')" id="btn">
                  <p id="btnText">Generate</p>
                  <div class="checked">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                      <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                    </svg>
                  </div>
                </button>            
                  <button class="bt1" type="reset">Clear</button>
                  </div>
              </div>
    </form>`);
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function () {
        btn.classList.remove("active");
        btnText.innerHTML = "Generate";
      }, 3 * 1000);
      e.preventDefault();
      const tx = document.getElementsByTagName("textarea");
      let inputs = [];
      let noOfprefix = 0;
      for (let i = 0; i < tx.length; i++) {
        inputs.push(tx[i].value);
      }
      // console.log(inputs[1].split("\n"))
      let notAvailable = ["Not Available IE's \tNot Available Part numbers"];
      let Available = ["Available IE's \tAvailable Part numbers"];
      let rows = inputs[1].split("\n");
      let prefixArray = rows[1].split("\t").filter((p) => p != "");
      prefixArray.map((item) => {
        if (item) noOfprefix++;
      });
      // console.log(rows)
      // console.log(rows.length)
      rows[0] = "New\t" + rows[0];
      rows[1] = "\t" + rows[1];
      // console.log(rows, "rows")
      rows.map((item, index) => {
        if (index > 1) {
          let isMatching = [];
          let cellsArray = item.split("\t");
          // console.log(typeof cellsArray, cellsArray)
          // console.log(cellsArray[2])
          // if((cellsArray[2]!=="" && cellsArray[2]!=undefined) || (cellsArray[1]!=="" && cellsArray[1]!=undefined)){
          if (cellsArray[1] !== "" && cellsArray[1] != undefined) {
            // let oldieno= cellsArray[1]
            let newieno = cellsArray[1];
            // Changed no from 2 to 1
            let partno = cellsArray[0];
            console.log(cellsArray);
            let prefixPresence = cellsArray
              .slice(2, cellsArray.length)
              .filter((f) => f != "");
            console.log(prefixPresence);
            // number has been changed from 3 to 2
            // console.log(cellsArray, oldieno, newieno, partno, prefixPresence)
            if (partno.includes(",")) {
              partno = partno.split(",");
            } else {
              partno = [partno];
            }
            let ieno;
            // console.log(newieno)
            newieno &&
              newieno.split("/").map((item) => {
                if (item.includes("i")) {
                  ieno = item;
                }
              });
            // if(!ieno){
            //   oldieno.split("/").map((item)=>{
            //     if(item.includes("i")){
            //       ieno = item
            //     }
            //   })
            // }
            ieno = ieno.replace(/[^a-zA-Z0-9]+/g, "");
            if (ieno && !inputs[0].includes(ieno)) {
              // notAvailable.push(`${ieno} \t${(item.split("\t")[0])}`)
              //console.log("noieno", ieno)
              isMatching[0] = false;
            } else if (ieno != "" && ieno && ieno.includes("i")) {
              if (partno && partno.length > 0) {
                partno.map((i_partno) => {
                  if (i_partno && !inputs[0].includes(i_partno)) {
                    //console.log("nopartno", i)
                    isMatching[0] = false;
                  } else {
                    let batchIEContent = inputs[0]
                      .split(ieno)[1]
                      .split("SMCS Code:")
                      .slice(1, 2)
                      .join("");
                    let prefixCount = batchIEContent.split("S/N");
                    // console.log(prefixCount.length)
                    //console.log(prefixPresence)
                    // console.log(prefixArray)
                    if (prefixCount[1]) {
                      prefixPresence.map((i, in_) => {
                        isMatching[in_] = false;
                        // console.log(in_)
                        if (!prefixArray[in_].includes(":"))
                          prefixArray[in_] = ": " + prefixArray[in_];
                        if (
                          i == 0 &&
                          !batchIEContent.includes(prefixArray[in_])
                        ) {
                          isMatching[in_] = true;
                          // console.log('no prefix true', prefixArray[in_])
                        } else if (
                          i == 1 &&
                          !batchIEContent.includes(prefixArray[in_])
                        ) {
                          isMatching[in_] = false;
                          // console.log('no prefix false', prefixArray[in_])
                        } else {
                          // console.log(prefixCount)
                          prefixCount.map((a_, a_index) => {
                            // console.log(a_index)
                            // if(a_index < prefixCount.length){
                            // console.log(prefixCount[a_index+1].includes(prefixArray[in_]), a_index, i_partno, prefixArray[in_], a_.includes(i_partno), i==1, in_)
                            if (
                              isMatching[in_] != true &&
                              prefixCount[a_index + 1]?.includes(
                                prefixArray[in_]
                              ) &&
                              a_.includes(i_partno) &&
                              i == 1
                            ) {
                              // console.log("true",isMatching[in_]!= true , prefixCount[a_index+1]?.includes(prefixArray[in_]),a_.includes(i_partno),i==1)
                              isMatching[in_] = true;
                              return true;
                            } else if (
                              isMatching[in_] != true &&
                              prefixCount[a_index + 1]?.includes(
                                prefixArray[in_]
                              ) &&
                              !a_.includes(i_partno) &&
                              i == 0
                            ) {
                              // console.log("true",isMatching[in_]!= true , prefixCount[a_index+1]?.includes(prefixArray[in_]) , !a_.includes(i_partno) , i==0)
                              isMatching[in_] = true;
                              return true;
                            } else if (
                              isMatching[in_] != true &&
                              prefixCount[a_index + 1]?.includes(
                                prefixArray[in_]
                              ) &&
                              !a_.includes(i_partno) &&
                              i == 1
                            ) {
                              // console.log("nottrue",isMatching[in_]!= true , prefixCount[a_index+1]?.includes(prefixArray[in_]) , !a_.includes(i_partno) , i==1)
                              isMatching[in_] = false;
                              // console.log("nottrue", isMatching[in_])
                              return true;
                            } else if (
                              isMatching[in_] != true &&
                              prefixCount[a_index + 1]?.includes(
                                prefixArray[in_]
                              ) &&
                              a_.includes(i_partno) &&
                              i == 0
                            ) {
                              // console.log("notfalse",isMatching[in_]!= true , prefixCount[a_index+1]?.includes(prefixArray[in_]) , a_.includes(i_partno) , i==0)
                              isMatching[in_] = false;
                              return true;
                            }
                            // }
                          });
                        }
                      });
                    } else {
                      prefixPresence.map((i_, in_) => {
                        console.log(i_, i_ == 1);
                        isMatching[in_] = i_ == 1 ? true : false;
                      });
                    }
                  }
                });
              }
            }

            // console.log(JSON.stringify(rows[index]).split("\\t"))
            // rows[index] = JSON.stringify(rows[index]).split("\\t").filter(f=>f!="").join("\\t")
            // console.log(JSON.stringify(rows[index]))
            // rows[index] = JSON.parse(rows[index])
            console.log(isMatching);
            rows[index] = `${isMatching.includes(false) ? "NO" : "YES"}\t${
              rows[index]
            }`;
          } else {
            if (cellsArray[0] != "") {
              rows[index] = `NO\t${rows[index]}`;
              //console.log(rows[index])
            }
          }
        }
      });
      // console.log(notAvailable)
      navigator.clipboard.writeText("");
      navigator.clipboard.writeText(rows.join("\n"));
      //  console.log(rows)
    });
    $(".ssubmit button:nth-child(2)").click(function (e) {
      $("#form").trigger("reset");
    });
  });
  $(".bt:eq(6)").click(function () {
    $(".body").html(`<form id="form">
      <div class="item-spec">
          <div class="sno1">
            <label class="spectitle">Graphic Control Number</label>
            <input placeholder="Enter Graphic Control Number" name="gno">
          </div>
          <div class="sno">
            <label class="spectitle">Number of Rows</label>
            <input type="number" required placeholder="Enter number of rows" name="rows">
          </div>
      </div>
          <div class="spsubmit">
          <button type="submit" onclick="window.electronAPI.updateEvent('Spec Table')" id="btn">
              <p id="btnText">Generate</p>
              <div class="checked">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                      <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                  </svg>
              </div>
          </button>
          <button type="reset">Clear</button>
      </div>
  </form>`);
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function () {
        btn.classList.remove("active");
        btnText.innerHTML = "Generate";
      }, 3 * 1000);
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      var no = formProps.rows;
      console.log(formProps);
      if (formProps.gno) {
        var gcno = formProps.gno.toLowerCase().replace(/\s/g, "");
        var gnoSlice = formProps.gno.slice(2, 3);
        if (gnoSlice >= 6) {
          var gcn = `<figure figure-style="page-wide" id="i06804732.${gcno}"><graphic controlno="${gcno}" href="x-wc://file=${gcno}.cvx"/></figure>`;
        } else {
          var gcn = `<figure figure-style="page-wide" id="i06804732.${gcno}"><graphic controlno="${gcno}" href="x-wc://file=${gcno}.cnv"/></figure>`;
        }
      } else {
        var gcn = ``;
      }
      const R = `<table frame="all" id="i09608397.1" pgwide="1">
      <tgroup align="center" cols="4">
      <colspec colname="col1" colwidth="0.24*"/>
      <colspec colname="col2" colwidth="0.24*"/>
      <colspec colname="col3" colwidth="0.77*"/>
      <colspec colname="col4" colwidth="2.74*"/>
      <thead>
      <row>
      <entry valign="middle"><?PubTbl cell border-bottom-width="0.20pt" border-left-width="0.20pt" border-right-width="0.20pt" border-top-width="0.20pt"?><para>Item</para></entry>
      <entry valign="middle"><?PubTbl cell border-bottom-width="0.20pt" border-right-width="0.20pt" border-top-width="0.20pt"?><para>Qty</para></entry>
      <entry valign="middle"><?PubTbl cell border-bottom-width="0.20pt" border-right-width="0.20pt" border-top-width="0.20pt"?><para>Part</para></entry>
      <entry valign="middle"><?PubTbl cell border-bottom-width="0.20pt" border-right-width="0.20pt" border-top-width="0.20pt"?><para>Specification Description</para></entry>
      </row>
      </thead>
      <tbody>`;
      const W = `</tbody>
      </tgroup>
      </table>`;
      let O = "";
      for (let i = 0; i < no; i++) {
        O +=
          "\n" +
          `<row valign="middle">
              <entry colname="col1"><para>` +
          (i + 1) +
          `</para></entry>
              <entry colname="col2"><para></para></entry>
              <entry colname="col3"><para><cpn-id><partno></partno><cpn></cpn></cpn-id></para></entry>
              <entry align="left" colname="col4"><para></para></entry>
              </row>` +
          "\n";
      }
      row = R + O + W;
      console.log(row);
      navigator.clipboard.writeText("");
      navigator.clipboard.writeText(gcn + row);
    });
    $(".excel").hide();
  });
  $("#pdt").click(function () {
    $(".body").html(`<div class="periodicals"><p>Periodicals</p></div>`);
    $(".body").css({
      "background-image": "none",
      width: "626px",
      height: "420px",
      transition: "all 0.4s ease",
      transform: "translateX(180px)",
    });
    $(".icon").css({
      transform: "translateX(-280px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(320px)",
      transition: "transform 0.4s ease",
    });
    $("#text-title").delay(200).show();
    $("video").hide();
    $(".pdt-btns").show();
    $(".bug").hide();
    $(".spec-btns").hide();
    $(".excel").hide();
    $(".omm-btns").hide();
    $(".tsg-btns").hide();
    $(".da-btns").hide();
  });
  $("#spec").click(function () {
    $(".body").html(`<div class="periodicals1"><p>Specifications</p></div>`);
    $(".body").css({
      "background-image": "none",
      width: "626px",
      height: "420px",
      transition: "all 0.4s ease",
      transform: "translateX(180px)",
    });
    $(".icon").css({
      transform: "translateX(-280px)",
      transition: "transform 0.5s ease",
    });
    $(".icon1").css({
      transform: "translateX(320px)",
      transition: "transform 0.5s ease",
    });
    $("#text-title").show();
    $("video").hide();
    $(".bug").hide();
    $(".pdt-btns").hide();
    $(".spec-btns").show();
    $(".da-btns").hide();
    $(".omm-btns").hide();
    $(".tsg-btns").hide();
    $(".excel").hide();
  });
  $("#da").click(function () {
    $(".body").html(`<div class="periodicals2"><p>D & A</p></div>`);
    $(".body").css({
      "background-image": "none",
      width: "626px",
      height: "420px",
      transition: "all 0.4s ease",
      transform: "translateX(180px)",
    });
    $(".icon").css({
      transform: "translateX(-280px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(320px)",
      transition: "transform 0.4s ease",
    });
    $("#text-title").show();
    $("video").hide();
    $(".pdt-btns").hide();
    $(".bug").hide();
    $(".spec-btns").hide();
    $(".omm-btns").hide();
    $(".excel").hide();
    $(".tsg-btns").hide();
    $(".da-btns").show();
    $("#weight").click(function () {
      $(
        ".body"
      ).html(`<embed type="text/html" src="https://engineeringautomation.ecorp.cat.com/eatcui/PNWC/" 
            style="width: 100%;
                  height: 100%;">`);
    });
  });
  $("#omm").click(function () {
    $(".body").html(`<div class="periodicals2"><p>OMM</p></div>`);
    $(".body").css({
      "background-image": "none",
      width: "626px",
      height: "420px",
      transition: "all 0.4s ease",
      transform: "translateX(180px)",
    });
    $(".icon").css({
      transform: "translateX(-280px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(320px)",
      transition: "transform 0.4s ease",
    });
    $("#text-title").show();
    $("video").hide();
    $(".pdt-btns").hide();
    $(".bug").hide();
    $(".spec-btns").hide();
    $(".excel").hide();
    $(".da-btns").hide();
    $(".tsg-btns").hide();
    $(".omm-btns").show();
  });
  $("#tsg").click(function () {
    $(".body").html(`<div class="periodicals2"><p>TSG</p></div>`);
    $(".body").css({
      "background-image": "none",
      width: "626px",
      height: "420px",
      transition: "all 0.4s ease",
      transform: "translateX(180px)",
    });
    $(".icon").css({
      transform: "translateX(-280px)",
      transition: "transform 0.4s ease",
    });
    $(".icon1").css({
      transform: "translateX(320px)",
      transition: "transform 0.4s ease",
    });
    $("#text-title").show();
    $("video").hide();
    $(".pdt-btns").hide();
    $(".bug").hide();
    $(".spec-btns").hide();
    $(".excel").hide();
    $(".da-btns").hide();
    $(".omm-btns").hide();
    $(".tsg-btns").show();
  });
  $(".bt:eq(9)").click(function () {
    $(".body").html(`<form class="metric" id="form">
      <div class="metcontainer">
      <div class="toggle-container">
          <div class="toggle">
            <input type="checkbox" name="engtomet">
          </div>
          <div class="upright">
            <h3>Metric to English</h3>
          </div>
      </div>
        <div class="text">
          <div class="text-items"><p>Torque</p></div>
          <div class="text-items"><p>Length (mm)</p></div>
          <div class="text-items"><p>Length (cm)</p></div>
          <div class="text-items"><p>Weight</p></div>
          <div class="text-items"><p>Temperature</p></div>
          <div class="text-items"><p>Flow</p></div>
          <div class="text-items"><p>Pressure</p></div>
          <div class="text-items"><p>Volume</p></div>
        </div>
        <div class="metric-container">
          <div class="metric-items">
            <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value">
            <div class="plus">
              <span>&plusmn</span>
            </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol">
            <div class="note">
              <h3>Note: Mention <font color= #ebece3>ft/in</font> along with values (Eg: <font color= #ebece3>15ft/15in</font>)</h3>
            </div>
          </div>
          <div class="metric-items">
            <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value1">
            <div class="plus">
              <span>&plusmn</span>
            </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol1">
          </div>
          <div class="metric-items">
            <input type="text" oninput="this.value = this.value.toLowerCase()" placeholder="Enter value" name="value1a">
            <div class="plus">
              <span>&plusmn</span>
            </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol1a">
          </div>
          <div class="metric-items">
            <input type="text" placeholder="Enter value" name="value2" style="width:442px;">
          </div>
          <div class="metric-items">
            <input type="text" placeholder="Enter value" name="value3">
            <div class="plus">
              <span>&plusmn</span>          </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol1b">
          </div>
          <div class="metric-items">
            <input type="text" placeholder="Enter value" name="value4">
            <div class="plus">
              <span>&plusmn</span>
            </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol1c">
          </div>
          <div class="metric-items">
            <input type="text" placeholder="Enter value" name="value5">
            <div class="plus">
              <span>&plusmn</span>
            </div> 
            <input type="text" placeholder="Enter tolerance value" name="tol1d">
          </div>
          <div class="metric-items">
            <input type="text" name="value6" placeholder="Enter value" style="width:442px;">
          </div>
        </div>
    </div>
    <div class="msubmit-da">
        <button type="submit" onclick="window.electronAPI.updateEvent('Metric conversion-D&A')" id="btn">
            <p id="btnText">Generate</p>
            <div class="checked">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
              </svg>
            </div>
        </button>
      <button type="reset">Clear</button>
    </div>
    </form> `);
    $(".body").css("background-image", "none");
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function () {
        btn.classList.remove("active");
        btnText.innerHTML = "Generate";
      }, 3 * 1000);
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      console.log(formProps);
      let texttocopy;
      let unit_torque;
      let unit_length;
      if (formProps.value) {
        if (formProps.engtomet) {
          if (formProps.value.includes("in")) {
            formProps.value = formProps.value.replace("in", "");
            formProps.tol = formProps.tol.replace("in", "");
            formProps.cvalue = (formProps.value / 8.85074576738).toFixed(
              String(formProps.value).split(".")[1] &&
                String(formProps.value).split(".")[1].length
            );
            if (formProps.tol) {
              formProps.ctolvalue = (formProps.tol / 8.85074576738).toFixed(
                String(formProps.tol).split(".")[1] &&
                  String(formProps.tol).split(".")[1].length
              );
            }
            unit_torque = "in";
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
            }N.m</metric><english>${formProps.value} ${
              formProps.tol ? "± " + formProps.tol + " " : ""
            }${unit_torque}</english></unitsgrp>`;
          }
          if (formProps.value.includes("ft")) {
            formProps.value = formProps.value.replace("ft", "");
            formProps.tol = formProps.tol.replace("ft", "");
            formProps.cvalue = (formProps.value / 0.737562149277).toFixed(
              String(formProps.value).split(".")[1] &&
                String(formProps.value).split(".")[1].length
            );
            if (formProps.tol) {
              formProps.ctolvalue = (formProps.tol / 0.737562149277).toFixed(
                String(formProps.tol).split(".")[1] &&
                  String(formProps.tol).split(".")[1].length
              );
            }
            unit_torque = "ft";
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
            }N.m</metric><english>${formProps.value} ${
              formProps.tol ? "± " + formProps.tol + " " : ""
            }${unit_torque}</english></unitsgrp>`;
          }
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
            formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
          }N.m </metric><english>${formProps.value} ${
            formProps.tol ? "± " + formProps.tol + " " : ""
          }lb ${unit_torque}</english></unitsgrp>`;
        } else {
          if (formProps.value <= 34) {
            formProps.cvalue = (formProps.value * 8.85074576738).toFixed(0);
            if (formProps.tol) {
              formProps.ctolvalue = (formProps.tol * 8.85074576738).toFixed(0);
            }
            unit_torque = "in";
          } else {
            formProps.cvalue = (formProps.value * 0.737562149277).toFixed(0);
            if (formProps.tol) {
              formProps.ctolvalue = (formProps.tol * 0.737562149277).toFixed(0);
            }
            unit_torque = "ft";
          }
          texttocopy = `<unitsgrp><metric>${formProps.value} ${
            formProps.tol ? "± " + formProps.tol + " " : ""
          }N.m</metric><english>${formProps.cvalue} ${
            formProps.ctolvalue ? "± " + formProps.ctolvalue + " " : ""
          }lb ${unit_torque}</english></unitsgrp>`;
        }
      } else if (formProps.value1) {
        if (formProps.engtomet) {
          if (formProps.value1.includes(".") && formProps.tol1.includes(".")) {
            formProps.cvalue = (formProps.value1 / 0.03937007874).toFixed(
              String(formProps.value1).split(".")[1] &&
                String(formProps.value1).split(".")[1].length - 1
            );
            formProps.ctolvalue = (formProps.tol1 / 0.03937007874).toFixed(
              String(formProps.tol1).split(".")[1] &&
                String(formProps.tol1).split(".")[1].length - 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }mm</metric><english>${formProps.value1} ${
              Number(formProps.tol1) ? "± " + formProps.tol1 + " " : ""
            }inch</english></unitsgrp>`;
          } else {
            inputDecimal = formProps.value1.includes(".")
              ? formProps.value1
              : formProps.value1 + ".0";
            tolDecimal = formProps.tol1.includes(".")
              ? formProps.tol1
              : formProps.tol1 + ".0";
            formProps.cvalue = (inputDecimal / 0.03937007874).toFixed(
              String(inputDecimal).split(".")[1] &&
                String(inputDecimal).split(".")[1].length - 1
            );
            formProps.ctolvalue = (tolDecimal / 0.03937007874).toFixed(
              String(tolDecimal).split(".")[1] &&
                String(tolDecimal).split(".")[1].length - 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }mm</metric><english>${inputDecimal} ${
              Number(tolDecimal) ? "± " + tolDecimal + " " : ""
            }inch</english></unitsgrp>`;
            console.log(formProps.tol);
          }
        } else {
          if (formProps.value1.includes(".") && formProps.tol1.includes(".")) {
            formProps.cvalue = (formProps.value1 * 0.03937007874).toFixed(
              String(formProps.value1).split(".")[1] &&
                String(formProps.value1).split(".")[1].length + 1
            );
            formProps.ctolvalue = (formProps.tol1 * 0.03937007874).toFixed(
              String(formProps.tol1).split(".")[1] &&
                String(formProps.tol1).split(".")[1].length + 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.value1} ${
              Number(formProps.tol1) ? "± " + formProps.tol1 + " " : ""
            }mm</metric><english>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }inch</english></unitsgrp>`;
          } else {
            inputDecimal = formProps.value1.includes(".")
              ? formProps.value1
              : formProps.value1 + ".0";
            tolDecimal = formProps.tol1.includes(".")
              ? formProps.tol1
              : formProps.tol1 + ".0";
            formProps.cvalue = (inputDecimal * 0.03937007874).toFixed(
              String(inputDecimal).split(".")[1] &&
                String(inputDecimal).split(".")[1].length + 1
            );
            formProps.ctolvalue = (tolDecimal * 0.03937007874).toFixed(
              String(tolDecimal).split(".")[1] &&
                String(tolDecimal).split(".")[1].length + 1
            );
            texttocopy = `<unitsgrp><metric>${inputDecimal} ${
              Number(tolDecimal) ? "± " + tolDecimal + " " : ""
            }mm</metric><english>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }inch</english></unitsgrp>`;
          }
        }
      } else if (formProps.value1a) {
        if (formProps.engtomet) {
          if (
            formProps.value1a.includes(".") &&
            formProps.tol1a.includes(".")
          ) {
            formProps.cvalue = (formProps.value1a / 0.39370079).toFixed(
              String(formProps.value1a).split(".")[1] &&
                String(formProps.value1a).split(".")[1].length - 1
            );
            formProps.ctolvalue = (formProps.tol1a / 0.39370079).toFixed(
              String(formProps.tol1a).split(".")[1] &&
                String(formProps.tol1a).split(".")[1].length - 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }mm</metric><english>${formProps.value1a} ${
              Number(formProps.tol1a) ? "± " + formProps.tol1a + " " : ""
            }inch</english></unitsgrp>`;
          } else {
            inputDecimal = formProps.value1a.includes(".")
              ? formProps.value1a
              : formProps.value1a + ".0";
            tolDecimal = formProps.tol1a.includes(".")
              ? formProps.tol1a
              : formProps.tol1a + ".0";
            formProps.cvalue = (inputDecimal / 0.39370079).toFixed(
              String(inputDecimal).split(".")[1] &&
                String(inputDecimal).split(".")[1].length - 1
            );
            formProps.ctolvalue = (tolDecimal / 0.39370079).toFixed(
              String(tolDecimal).split(".")[1] &&
                String(tolDecimal).split(".")[1].length - 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }mm</metric><english>${inputDecimal} ${
              Number(tolDecimal) ? "± " + tolDecimal + " " : ""
            }inch</english></unitsgrp>`;
          }
        } else {
          if (
            formProps.value1a.includes(".") &&
            formProps.tol1a.includes(".")
          ) {
            formProps.cvalue = (formProps.value1a * 0.39370079).toFixed(
              String(formProps.value1a).split(".")[1] &&
                String(formProps.value1a).split(".")[1].length + 1
            );
            formProps.ctolvalue = (formProps.tol1a * 0.39370079).toFixed(
              String(formProps.tol1a).split(".")[1] &&
                String(formProps.tol1a).split(".")[1].length + 1
            );
            texttocopy = `<unitsgrp><metric>${formProps.value1a} ${
              Number(formProps.tol1a) ? "± " + formProps.tol1a + " " : ""
            }cm</metric><english>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }inch</english></unitsgrp>`;
          } else {
            inputDecimal = formProps.value1a.includes(".")
              ? formProps.value1a
              : formProps.value1a + ".0";
            tolDecimal = formProps.tol1a.includes(".")
              ? formProps.tol1a
              : formProps.tol1a + ".0";
            formProps.cvalue = (inputDecimal * 0.39370079).toFixed(
              String(inputDecimal).split(".")[1] &&
                String(inputDecimal).split(".")[1].length + 1
            );
            formProps.ctolvalue = (tolDecimal * 0.39370079).toFixed(
              String(tolDecimal).split(".")[1] &&
                String(tolDecimal).split(".")[1].length + 1
            );
            texttocopy = `<unitsgrp><metric>${inputDecimal} ${
              Number(tolDecimal) ? "± " + tolDecimal + " " : ""
            }cm</metric><english>${formProps.cvalue} ${
              Number(formProps.ctolvalue)
                ? "± " + formProps.ctolvalue + " "
                : ""
            }inch</english></unitsgrp>`;
          }
        }
      } else if (formProps.value2) {
        if (formProps.engtomet) {
          formProps.cvalue = (formProps.value2 / 2.20462262).toFixed(
            String(formProps.value2).split(".")[1] &&
              String(formProps.value2).split(".")[1].length
          );
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} kg</metric><english>${formProps.value2} lb</english></unitsgrp>`;
        } else {
          formProps.cvalue = (formProps.value2 * 2.20462262).toFixed(
            String(formProps.value2).split(".")[1] &&
              String(formProps.value2).split(".")[1].length
          );
          texttocopy = `<unitsgrp><metric>${formProps.value2} kg</metric><english>${formProps.cvalue} lb</english></unitsgrp>`;
        }
      } else if (formProps.value3) {
        if (formProps.engtomet) {
          formProps.cvalue = (
            (formProps.value3 - 32) *
            0.555555555555556
          ).toFixed(
            String(formProps.value3).split(".")[1] &&
              String(formProps.value3).split(".")[1].length
          );
          if (formProps.tol1b) {
            formProps.ctolvalue = (
              (formProps.tol1b - 32) *
              0.555555555555556
            ).toFixed(
              String(formProps.tol1b).split(".")[1] &&
                String(formProps.tol1b).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          } °C</metric><english>${formProps.value3} ${
            Number(formProps.tol1b) ? "± " + formProps.tol1b + " " : ""
          }°F</english></unitsgrp>`;
        } else {
          formProps.cvalue = (formProps.value3 * 1.8 + 32).toFixed(
            String(formProps.value3).split(".")[1] &&
              String(formProps.value3).split(".")[1].length
          );
          if (formProps.tol1b) {
            formProps.ctolvalue = (formProps.tol1b * 1.8 + 32).toFixed(
              String(formProps.tol1b).split(".")[1] &&
                String(formProps.tol1b).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.value3} ${
            Number(formProps.tol1b) ? "± " + formProps.tol1b + " " : ""
          }°C</metric><english>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }°F</english></unitsgrp>`;
        }
      } else if (formProps.value4) {
        if (formProps.engtomet) {
          formProps.cvalue = (formProps.value4 * 3.785412).toFixed(
            String(formProps.value4).split(".")[1] &&
              String(formProps.value4).split(".")[1].length
          );
          if (formProps.tol1c) {
            formProps.ctolvalue = (formProps.tol1c * 3.785412).toFixed(
              String(formProps.tol1c).split(".")[1] &&
                String(formProps.tol1c).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }US gpm</metric><english>${formProps.value4} ${
            Number(formProps.tol1c) ? "± " + formProps.tol1c + " " : ""
          }L/min</english></unitsgrp>`;
        } else {
          formProps.cvalue = (formProps.value4 * 0.264172).toFixed(
            String(formProps.value4).split(".")[1] &&
              String(formProps.value4).split(".")[1].length
          );
          if (formProps.tol1c) {
            formProps.ctolvalue = (formProps.tol1c * 0.264172).toFixed(
              String(formProps.tol1c).split(".")[1] &&
                String(formProps.tol1c).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.value4} ${
            Number(formProps.tol1c) ? "± " + formProps.tol1c + " " : ""
          }L/min</metric><english>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }US gpm</english></unitsgrp>`;
        }
      } else if (formProps.value5) {
        if (formProps.engtomet) {
          formProps.cvalue = (formProps.value5 * 6.89475727999991).toFixed(
            String(formProps.value5).split(".")[1] &&
              String(formProps.value5).split(".")[1].length
          );
          if (formProps.tol1d) {
            formProps.ctolvalue = (formProps.tol1d * 6.89475727999991).toFixed(
              String(formProps.tol1d).split(".")[1] &&
                String(formProps.tol1d).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }kPa</metric><english>${formProps.value5} ${
            Number(formProps.tol1d) ? "± " + formProps.tol1d + " " : ""
          }psi</english></unitsgrp>`;
        } else {
          formProps.cvalue = (formProps.value5 * 0.14503773800722).toFixed(
            String(formProps.value5).split(".")[1] &&
              String(formProps.value5).split(".")[1].length
          );
          if (formProps.tol1d) {
            formProps.ctolvalue = (formProps.tol1d * 0.14503773800722).toFixed(
              String(formProps.tol1d).split(".")[1] &&
                String(formProps.tol1d).split(".")[1].length
            );
          }
          texttocopy = `<unitsgrp><metric>${formProps.value5} ${
            Number(formProps.tol1d) ? "± " + formProps.tol1d + " " : ""
          }kPa</metric><english>${formProps.cvalue} ${
            Number(formProps.ctolvalue) ? "± " + formProps.ctolvalue + " " : ""
          }psi</english></unitsgrp>`;
        }
      } else if (formProps.value6) {
        if (formProps.engtomet) {
          formProps.cvalue = (formProps.value6 * 3.78541).toFixed(
            String(formProps.value6).split(".")[1] &&
              String(formProps.value6).split(".")[1].length
          );
          texttocopy = `<unitsgrp><metric>${formProps.cvalue} L</metric><english>${formProps.value6} US gal</english></unitsgrp>`;
        } else {
          formProps.cvalue = (formProps.value6 * 0.264172).toFixed(
            String(formProps.value6).split(".")[1] &&
              String(formProps.value6).split(".")[1].length
          );
          texttocopy = `<unitsgrp><metric>${formProps.value6} L</metric><english>${formProps.cvalue} US gal</english></unitsgrp>`;
        }
      }
      navigator.clipboard.writeText("");
      navigator.clipboard.writeText(texttocopy);
    });
    $(".bt1 button:nth-child(2)").click(function (e) {
      $("#form").trigger("reset");
      $(".upright h3").text("Metric to English");
      $(".upright h3").css("color", "#999999");
      $(".note h3").css("display", "none");
      $(".toggle input").attr("checked", false);
    });
    $(".toggle input").change(function (e) {
      if ($(this).is(":checked")) {
        $(".upright h3").text("English to Metric");
        $(".upright h3").css("color", "#565946");
        $(".note h3").css("display", "block");
        $(".toggle input").attr("checked", true);
      } else {
        $(".upright h3").text("Metric to English");
        $(".upright h3").css("color", "#999999");
        $(".note h3").css("display", "none");
        $(".toggle input").attr("checked", false);
      }
    });
  });
  $(".bt:eq(7)").click(function () {
    $(".body").html(
      '<div class="logo"><img src="../img/EA_centerlogo.png" alt=""></div>'
    );
  });
  $("#prefix").click(function () {
    $(".body").html(`<div class="periodicals4"><p>Prefix Update</p></div>`);
    $(".excel").hide();
  });
  $(".bt:eq(11)").click(function () {
    $(".body").html(`<form id="form" class="xref" id="formInput">
      <div class="tsg-container">
        <div class="tno">
              <div class="t-ref1">
                  <label class="ttitle">ECM Types</label>
                  <input type="text" id="ecm" placeholder="Enter ECM Types" name="ID">
              </div>
              <div class="note1">
              <h3>Eg: Machine,Brake....</h3>
              </div>
              <div class="ttype">
                <label class="ttitle1">Select Circuit Test</label>
                <select required name="tests" id="tests">
                  <option value="0">--------------------------------------------------------------------------------------------</option>
                  <option value="1">Alarm - Test</option>
                  <option value="2">CAN Data Link - Test</option>
                  <option value="3">Cat Data Link - Test</option>
                  <option value="4">ECM Location Code - Test</option>
                  <option value="5">Electrical Connector - Inspect</option>
                  <option value="6">Electrical Power Supply - Test</option>
                  <option value="7">Parameter - Test</option>
                  <option value="8">Relay - Test</option>
                  <option value="9">Sensor (Data Link Type) - Test</option>
                  <option value="10">Sensor Signal (Analog, Active) - Test</option>
                  <option value="11">Sensor Signal (Analog, Passive) - Test</option>
                  <option value="12">Sensor Signal (PWM) - Test</option>
                  <option value="13">Sensor Supply - Test</option>
                  <option value="14">Solenoid Return - Test</option>
                  <option value="15">Solenoid Valve - Test</option>
                  <option value="16">Solenoid Valve (Switch Controlled) - Test</option>
                  <option value="17">Speed Sensor - Test</option>
                  <option value="18">Switch Circuits - Test</option>
                  <option value="19">Window Wiper Delay - Test</option>
                  <option value="20">Wiring Harness (Open Circuit) - Test</option>
                  <option value="21">Wiring Harness (Short Circuit) - Test</option>
                </select> 
              </div>
              <div class="fmiType" id="container">
                  <div class="fmititle">Select FMIs</div>
                  <div class="fmi">
                      <ul>
                      </ul>
                  </div>
              </div>
        </div>
        <div class="tsubmit">
            <button type="submit" onclick="window.electronAPI.updateEvent('Circuit Tests')" id="btn">
            <p id="btnText">Generate</p>
            <div class="checked">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
              </svg>
            </div>
          </button>
            <button type="reset" onclick="ulElement.innerHTML = '';">Clear</button>
        </div>
      </div> 
      </form>
          <script>
            // Assuming your form input has an id of "formInput"
              const formInput = document.getElementById('tests');
              const container = document.getElementById('container');
              const ulElement = container.querySelector('ul'); // Get the existing ul element
              // let resultDiv = null; // Initialize resultDiv outside the event listener

              // Define static values for each option using an object
              const staticValues = {
                  1: ['FMI 3', 'FMI 5', 'FMI 6'],
                  2: ['FMI 2', 'FMI 9', 'FMI 14', 'FMI 19'],
                  3: ['FMI 9', 'FMI 14'],
                  4: ['FMI 2'],
                  5: ['No FMI'],
                  6: ['FMI 2', 'FMI 3', 'FMI 4'],
                  7: ['FMI 2'],
                  8: ['FMI 3', 'FMI 5', 'FMI 6'],
                  9: ['FMI 2', 'FMI 9', 'FMI 13'],
                  10: ['FMI 3', 'FMI 4'],
                  11: ['FMI 3', 'FMI 4'],
                  12: ['FMI 3', 'FMI 4', 'FMI 8', 'FMI 13'],
                  13: ['FMI 3', 'FMI 4'],
                  14: ['FMI 3', 'FMI 4'],
                  15: ['FMI 3', 'FMI 5', 'FMI 6', 'FMI 11', 'FMI 13'],
                  16: ['FMI 3', 'FMI 6'],
                  17: ['FMI 2', 'FMI 8'],
                  18: ['FMI 2', 'FMI 3', 'FMI 4'],
                  19: ['FMI 3', 'FMI 6'],
                  20: ['No FMI'],
                  21: ['No FMI']
              };

              // Add onchange event listener to the form input
              formInput.addEventListener('change', function() {
                  // Remove previous li elements if they exist
                  ulElement.innerHTML = '';

                  // Retrieve static values based on the onchange value
                  const values = staticValues[parseInt(formInput.value)];

                  // Loop through the values to create li elements with checkboxes and labels
                  for (let i = 0; i < values.length; i++) {
                      const liElement = document.createElement('li');

                      // Create the checkbox
                      const checkbox = document.createElement('input');
                      checkbox.type = 'checkbox';
                      checkbox.name = 'fmi';
                      checkbox.value = i; // You can set any value here
                      
                      // Create the label
                      const label = document.createElement('label');
                      label.textContent = values[i];

                      // Append the checkbox and label to the li element
                      liElement.appendChild(checkbox);
                      liElement.appendChild(label);

                      // Append the li element to the ul element
                      ulElement.appendChild(liElement);
                  }
              });
          </script>`);
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function () {
        btn.classList.remove("active");
        btnText.innerHTML = "Generate";
      }, 3 * 1000);
      e.preventDefault();
      const dropdown = document.getElementById('tests');
    const selectedValue = parseInt(dropdown.value); // Parse the dropdown value to an integer
    // Use switch statement to call the appropriate function based on the selected value
    switch (selectedValue) {
        case 1:
            script1();
            break;
        case 2:
            script2();
            break;
        case 3:
            script3();
            break;
        case 4:
          script4();
          break;
        case 5:
          script5();
          break;
        case 6:
          script6();
          break;
        case 7:
          script7();
          break;
        case 8:
          script8();
          break;
        case 9:
          script9();
          break;
        case 10:
          script10();
          break;
        case 11:
          script11();
          break;
        case 12:
          script12();
          break;
        case 13:
          script13();
          break;  
        case 14:
          script14();
          break;
        case 15:
          script15();
          break;
        case 16:
          script16();
          break;
        case 17:
          script17();
          break;
        case 18:
          script18();
          break;
        case 19:
          script19();
          break;
        case 20:
          script20();
          break;
        case 21:
          script21();
          break;
        default:
            alert("Invalid option selected.");
    }
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      console.log(formProps);
      const circuitTestNo = formProps.tests;
      // Assuming checkboxes have a name attribute "fmi"
     // Function for script 1
     function script1() {
      const checkboxes = document.querySelectorAll('input[name="fmi"]');      
      const checkedValues = [];
        // Iterate over each checkbox
        checkboxes.forEach(function(checkbox) {
            // Check if the checkbox is checked
            if (checkbox.checked) {
                // If checked, add its value to the checkedValues array
                checkedValues.push(checkbox.value);
            }
        });
        // Now checkedValues array contains the values of all checked checkboxes
        console.log(checkedValues);
        const ecm = document.getElementById("ecm").value.replaceAll(" ","");
        const ecmTypes = ecm.split(",");
        const randFmi = [
            `<randitem>FMI <code>3</code>, proceed to <xref format="dita" href="#i09800553/i09800553.9" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>5</code>, proceed to <xref format="dita" href="#i09800553/i09800553.12" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>6</code>, proceed to <xref format="dita" href="#i09800553/i09800553.16" scope="local" type="sect"></xref>.</randitem>`
          ];
        const FMI = [
          `<sect id="i09800553.9">
          <title>FMI 3</title>
          <table frame="all" id="i09800553.10" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="132.07*"/>
          <colspec colname="col2" colwidth="54.09*"/>
          <colspec colname="col3" colwidth="166.04*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Power Circuit For A Short</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry><para>1. Turn the key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the harness connectors from the ECM.</para><?Pub _newline?><para>3. Disconnect the alarm from the machine harness.</para><?Pub _newline?><para>4. At the connector for the ECM, measure the resistance between the alarm contact and all sources for +battery.</para></entry>
          <entry><para>Each value is greater than 5000 ohms.</para></entry>
          <entry><para><emphasis>Result:</emphasis> Each value is greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i09800553/i09800553.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> Resistance is less than 5 ohms, a short exists in signal circuit.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or a corroded connection in the circuit. A resistance value greater than 5000 ohms indicates an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i09800553/i09800553.11" scope="local" type="table"></xref>.</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <table id="i09800553.11" pgwide="y" tstbl="Y">
          <?PubTbl table border-top-width="0.20pt"?>
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="132.07*"/>
          <colspec colname="col2" colwidth="54.09*"/>
          <colspec colname="col3" colwidth="166.04*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="top"><?PubTbl cell border-top-width="1.00pt"?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
          <entry><para>The DTC is no longer present.</para></entry>
          <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <propname>Caterpillar</propname>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
      </sect>`,
          `<sect id="i09800553.12">
          <title>FMI 5</title>
          <table frame="all" id="i09800553.13" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="131.80*"/>
          <colspec colname="col2" colwidth="54.64*"/>
          <colspec colname="col3" colwidth="165.49*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Alarm</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the alarm from the machine harness.</para><?Pub _newline?><para>3. Place a jumper wire between contact 1 and contact 2, at the harness connector for the alarm.</para><?Pub _newline?><para>4. Turn the key start switch and the disconnect switch <position>ON</position>. Do not start the engine.</para></entry>
          <entry><para>The FMI <code>5</code> DTC changes to an FMI <code>6</code> after the jumper wire is installed.</para></entry>
          <entry><para><emphasis>Result:</emphasis> The harness is correct. The FMI <code>5</code> DTC changes to an FMI <code>6</code> when the jumper wire is installed. The alarm has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the alarm. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i09800553/i09800553.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC remains active. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Harness For An Open</label>, Table <xref format="dita" href="#i09800553/i09800553.14" scope="local" type="table"></xref>.</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <table id="i09800553.14" pgwide="y" tstbl="Y">
          <?PubTbl table border-top-width="0.20pt"?>
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="131.80*"/>
          <colspec colname="col2" colwidth="54.64*"/>
          <colspec colname="col3" colwidth="165.49*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="top"><?PubTbl cell border-top-width="1.00pt"?><para>Check The Harness For An Open</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the harness connectors from the ECM.</para><?Pub _newline?><para>3. The jumper wire remains that was installed in the previous test step remains in place.</para><?Pub _newline?><para>4. At the machine harness connector for the ECM, measure the resistance between the signal contact and ground contact.</para></entry>
          <entry><para>Each reading is less than 5 ohms.</para></entry>
          <entry><para><emphasis>Result:</emphasis> The reading is less than 5 ohms. The harness is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i09800553/i09800553.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The reading is greater than 5000 ohms. The circuit is open in the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The open is in the signal wire or the return wire. Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or a corroded connection in the circuit. A resistance value greater than 5000 ohms indicates an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i09800553/i09800553.15" scope="local" type="table"></xref>.</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <table id="i09800553.15" pgwide="y" tstbl="Y">
          <?PubTbl table border-top-width="0.20pt"?>
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="132.07*"/>
          <colspec colname="col2" colwidth="54.09*"/>
          <colspec colname="col3" colwidth="166.04*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="top"><?PubTbl cell border-top-width="1.00pt"?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
          <entry><para>The DTC is no longer present.</para></entry>
          <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <propname>Caterpillar</propname>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
      </sect>`,
          `<sect id="i09800553.16">
          <title>FMI 6</title>
          <table frame="all" id="i09800553.17" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="131.54*"/>
          <colspec colname="col2" colwidth="54.90*"/>
          <colspec colname="col3" colwidth="165.49*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Alarm</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry><para>1. Turn the key start switch and disconnect switch to the <position>ON</position> position. Do <emphasis>NOT</emphasis> start the engine.</para><?Pub _newline?><para>2. Check that DTC is active.</para><?Pub _newline?><para>3. Disconnect the alarm from machine harness.</para><?Pub _newline?><para>4. Observe the status of the DTC.</para></entry>
          <entry><para>The FMI <code>6</code> changes to an FMI <code>5</code> when the alarm is removed.</para></entry>
          <entry><para><emphasis>Result:</emphasis> The FMI <code>6</code> changes to an FMI <code>5</code> when the alarm is disconnected. The alarm has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the alarm. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i09800553/i09800553.19" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC does not change when the alarm is disconnected from the harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal Circuit For A Short To Ground</label>, Table <xref format="dita" href="#i09800553/i09800553.18" scope="local" type="table"></xref>.</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <table id="i09800553.18" pgwide="y" tstbl="Y">
          <?PubTbl table border-top-width="0.20pt"?>
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="131.54*"/>
          <colspec colname="col2" colwidth="54.90*"/>
          <colspec colname="col3" colwidth="165.49*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="top"><?PubTbl cell border-top-width="1.00pt"?><para>Check The Signal Circuit For A Short To Ground</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry><para>1. Turn the key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. The alarm remains disconnected from the harness.</para><?Pub _newline?><para>3. Disconnect all harness connections at the ECM.</para><?Pub _newline?><para>4. At the ECM harness connector, measure the resistance between the alarm contact and all possible sources of ground.</para></entry>
          <entry><para>All readings are greater than 5000 ohms.</para></entry>
          <entry><para><emphasis>Result:</emphasis> All resistance greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i09800553/i09800553.19" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more readings less than 5 ohms. The short is between the signal contact and the circuit with the low-resistance value.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or a corroded connection in the circuit. A resistance value greater than 5000 ohms indicates an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i09800553/i09800553.19" scope="local" type="table"></xref>.</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <table id="i09800553.19" pgwide="y" tstbl="Y">
          <?PubTbl table border-top-width="0.20pt"?>
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="132.07*"/>
          <colspec colname="col2" colwidth="54.09*"/>
          <colspec colname="col3" colwidth="166.04*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="top"><?PubTbl cell border-top-width="1.00pt"?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
          <entry><para>The DTC is no longer present.</para></entry>
          <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <propname>Caterpillar</propname>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
      </sect>`
        ]
        const genInfo = `<sect id="i09800553.1">
        <title>General Information</title>
        <para>The alarm is an output of the Electronic Control Module (ECM). The alarm alerts the operator of a fault condition (fault alarm). The alarm also alerts people in the general area of the machine (backup alarm).</para>
        <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the alarm circuits of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
        <para>The diagram or diagrams below are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
        </sect>`;
    
        let ECM = "";
        for (i = 0; i < ecmTypes.length; i++) {
          ECM += `<sect id="i09800553.${2 + i}">
              <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
              <table frame="all" id="i09800553.3" pgwide="1" srtbl="Y">
              <tgroup cols="4">
              <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
              <colspec colname="COLSPEC2" colwidth="47.97*"/>
              <colspec align="center" colname="col2" colwidth="47.97*"/>
              <colspec colname="col3" colwidth="198.87*"/>
              <colspec colname="COLSPEC0" colwidth="165.77*"/>
              <thead>
              <row>
              <entry align="center" nameend="COLSPEC0" namest="COLSPEC2" valign="top"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
              </row>
              <row valign="middle">
              <entry align="center"><para>J1939</para></entry>
              <entry><para>CDL</para></entry>
              <entry align="center"><para>Diagnostic Trouble Code Description</para></entry>
              <entry align="center"><para>System Response</para></entry>
              </row>
              </thead>
              <tbody>
              <row>
              <entry align="center"><para><code>####-3</code></para></entry>
              <entry><para><code>####-3</code></para></entry>
              <entry><para><codedesc>####: Voltage Above Normal</codedesc></para></entry>
              <entry><para>####</para></entry>
              </row>
              <row>
              <entry align="center"><para><code>####-5</code></para></entry>
              <entry><para><code>####-5</code></para></entry>
              <entry><para><codedesc>#####: Current Below Normal</codedesc></para></entry>
              <entry><para>####</para></entry>
              </row>
              <row>
              <entry align="center"><para><code>####-6</code></para></entry>
              <entry><para><code>####-6</code></para></entry>
              <entry><para><codedesc>####: Current Above Normal</codedesc></para></entry>
              <entry><para>####</para></entry>
              </row>
              </tbody>
              </tgroup>
              </table>
              <figure id="i09800553.4">
              <graphic controlno="g03638310" href="x-wc://file=g03638310.cnv"/>
              <caption>
              <para>Travel Alarm Circuit</para>
              </caption>
              </figure>
              </sect>\n`;
        }
    
        let dtc = `<sect id="i09800553.5">
                          <title>Diagnostic Trouble Code Procedure</title>
                          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
                          <table frame="all" id="i09800553.6" pgwide="1" tooltbl="Y">
                          <tgroup cols="4">
                          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
                          <colspec colname="col1" colwidth="0.49*"/>
                          <colspec colname="col2" colwidth="0.92*"/>
                          <colspec colname="col3" colwidth="1.99*"/>
                          <colspec colname="col4" colwidth="0.62*"/>
                          <thead>
                          <row>
                          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
                          </row>
                          <row>
                          <entry align="center" valign="top"><para>Tool</para></entry>
                          <entry align="center" valign="top"><para>Part Number</para></entry>
                          <entry align="center" valign="top"><para>Description</para></entry>
                          <entry align="center" valign="top"><para>Qty</para></entry>
                          </row>
                          </thead>
                          <tbody>
                          <row>
                          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
                          <entry align="center"><para><partno>237-5130</partno></para></entry>
                          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
                          <entry align="center" valign="middle"><para>1</para></entry>
                          </row>
                          <row>
                          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
                          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
                          <entry align="center" valign="middle"><para>1</para></entry>
                          </row>
                          <row>
                          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
                          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
                          <entry align="center" valign="middle"><para>1</para></entry>
                          </row>
                          <row>
                          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
                          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
                          <entry align="center" valign="middle"><para>1</para></entry>
                          </row>
                          <row>
                          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
                          <entry align="center"><para>JERD2129</para></entry>
                          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
                          <entry align="center" valign="middle"><para>1</para></entry>
                          </row>
                          <row>
                          <entry align="center"></entry>
                          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
                          <entry align="center" valign="middle"><para>1</para></entry>
                          </row>
                          <row valign="middle">
                          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
                          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
                          <entry align="center" colname="col4"><para>1</para></entry>
                          </row>
                          <row>
                          <entry align="center" valign="middle"><para>T3</para></entry>
                          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
                          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
                          <entry align="center" valign="middle"><para>1</para></entry>
                          </row>
                          <row>
                          <entry align="center" valign="middle"><para>T4</para></entry>
                          <entry align="center"><para><partno>190-8900</partno></para></entry>
                          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
                          <entry align="center" valign="middle"><para>1</para></entry>
                          </row>
                          <row>
                          <entry align="center" valign="middle"><para>T5</para></entry>
                          <entry align="center"><para><partno>175-3700</partno></para></entry>
                          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
                          <entry align="center" valign="middle"><para>1</para></entry>
                          </row>
                          </tbody>
                          </tgroup>
                          </table>
                          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure.</para>
                          <steplist>
                              <step id="i09800553.7">
                              <para>Identify the active FMI associated with the DTC.</para>
                              </step>
                              <step id="i09800553.8">
                              <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
                              </step>
          </steplist><randlist>`;
        let randlist = [];
        for(i=0;i<checkedValues.length;i++){
          randlist+= randFmi[checkedValues[i]];
        }
    
        let sectFMI = [];
          for(i=0;i<checkedValues.length;i++){
              sectFMI+= FMI[checkedValues[i]];
          }
        output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`
    
        navigator.clipboard.writeText(output);
    
      }
      // Function for script 2
      function script2() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
        const ecm = document.getElementById("ecm").value.replaceAll(" ","");
        const ecmTypes = ecm.split(",");
        const randFmi = [
            `<randitem>FMI <code>2</code>, proceed to <xref format="dita" href="#i08789944/i08789944.9" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>9</code>, proceed to <xref format="dita" href="#i08789944/i08789944.14" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>14</code>, proceed to <xref format="dita" href="#i08789944/i08789944.25" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>19</code>, proceed to .<xref format="dita" href="#i08789944/i08789944.28" scope="local" type="sect"></xref></randitem>`
          ];
        const FMI = [
            `<sect id="i08789944.9">
                <title>FMI 2</title>
                <table frame="all" id="i08789944.10" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="119.15*"/>
                <colspec colname="col2" colwidth="47.77*"/>
                <colspec colname="col3" colwidth="148.88*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Inspect The Harness Connections</para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><emphasis>Troubleshooting Test Steps</emphasis></entry>
                <entry align="center"><emphasis>Values</emphasis></entry>
                <entry align="center"><emphasis>Results</emphasis></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><para>1. Turn key start switch and disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Inspect all harness connections related to the <trademark>CAN</trademark> data link. Make sure that the connectors are clean and tight.</para><?Pub _newline?><para>3. Check the connectors for proper mating. Ensure that all the seals are present and in place.</para><?Pub _newline?><para>4. Check the harness for signs of damage or abrasion.</para><?Pub _newline?><para>5. Check the wires at the connector. Ensure that the wires are secured tightly into the connector. <emphasis>Take care not to pull the wire out of the connector.</emphasis></para><?Pub _newline?><para>6. Check the exposed wires at the connectors for nicks or signs of abrasion.</para><?Pub _newline?><para>7. Check for moisture inside the connector.</para></entry>
                <entry><para>The machine harness connectors are tight and free of corrosion.</para></entry>
                <entry><para><emphasis>Result:</emphasis> The machine harness connectors are tight and free of corrosion. <?Pub _newline?><?Pub _newline?>Proceed to <label>Verify The Hardware And The Software Part Numbers</label>, Table <xref format="dita" href="#i08789944/i08789944.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The machine harness connectors are in need of repair.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.13" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table frame="all" id="i08789944.11" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="119.15*"/>
                <colspec colname="col2" colwidth="47.77*"/>
                <colspec colname="col3" colwidth="148.88*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Verify The Hardware And The Software Part Numbers<fn id="i08789944.12" outputclass="1">
                <para>Consult the Technical Communicator for the correct part numbers of the flash software.</para>
                </fn></para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><emphasis>Troubleshooting Test Steps</emphasis></entry>
                <entry align="center"><emphasis>Values</emphasis></entry>
                <entry align="center"><emphasis>Results</emphasis></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><?Pub _cellfont Weight="medium" AllCap="no"?><para>1. Verify that the following information is correct:</para><?Pub _newline?><para>The part number of the flash software for the ECM is correct.</para><para>The part number of the ECM is correct.</para><para>The part numbers of the sensors are correct.</para></entry>
                <entry><para>All the part numbers are correct</para></entry>
                <entry><para><emphasis>Result:</emphasis> All the part numbers are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> All the part numbers are not correct. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The ECM or the sensors have the wrong part number or incorrect flash software is installed. Flash the correct software or replace the incorrect ECM or the sensor with a module that has the correct part number. Refer to the <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Flash Program</pubtitle></ie-topic></pubref> section for additional information. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.13" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table id="i08789944.13" pgwide="1" tstbl="Y">
                <?PubTbl table border-top-width="0.20pt"?>
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
                <colspec colname="col1" colwidth="103.22*"/>
                <colspec colname="col2" colwidth="41.07*"/>
                <colspec colname="col3" colwidth="125.71*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont?><para>Check If The Diagnostic Code Remains</para></entry>
                </row>
                <row>
                <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center" valign="middle"><para>Values</para></entry>
                <entry align="center" valign="middle"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
                <entry><para>The DTC is no longer present.</para></entry>
                <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
            </sect>`,
            `<sect id="i08789944.14">
                <title>FMI 9</title>
                <table frame="all" id="i08789944.15" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="120.31*"/>
                <colspec colname="col2" colwidth="48.63*"/>
                <colspec colname="col3" colwidth="146.86*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Verify The Hardware And The Software Part Numbers<fn id="i08789944.16" outputclass="1">
                <para>Consult the Technical Communicator for the correct part numbers of the flash software.</para>
                </fn></para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><emphasis>Troubleshooting Test Steps</emphasis></entry>
                <entry align="center"><emphasis>Values</emphasis></entry>
                <entry align="center"><emphasis>Results</emphasis></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><?Pub _cellfont Weight="medium" AllCap="no"?><para>1. Verify that the following information is correct:</para><?Pub _newline?><para>The part number of the flash software for the ECM is correct.</para><para>The part number of the ECM is correct.</para><para>The part numbers of the sensors are correct.</para></entry>
                <entry><para>All the part numbers are correct</para></entry>
                <entry><para><emphasis>Result:</emphasis> All the part numbers are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Inspect The Harness Connections</label>, Table <xref format="dita" href="#i08789944/i08789944.17" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> All the part numbers are not correct. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The ECM or the sensors have the wrong part number or incorrect flash software is installed. Flash the correct software or replace the incorrect ECM or the sensor with a module that has the correct part number. Refer to the <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Flash Program</pubtitle></ie-topic></pubref> section for additional information. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.24" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table frame="all" id="i08789944.17" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="124.95*"/>
                <colspec colname="col2" colwidth="50.40*"/>
                <colspec colname="col3" colwidth="152.42*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Inspect The Harness Connections</para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center"><para>Values</para></entry>
                <entry align="center"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><para>1. Turn key start switch and disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Inspect all harness connections related to the <trademark>CAN</trademark> data link. Make sure that the connectors are clean and tight.</para><?Pub _newline?><para>3. Check the connectors for proper mating. Ensure that all the seals are present and in place.</para><?Pub _newline?><para>4. Check the harness for signs of damage or abrasion.</para><?Pub _newline?><para>5. Check the wires at the connector. Ensure that the wires are secured tightly into the connector. <emphasis>Take care not to pull the wire out of the connector.</emphasis></para><?Pub _newline?><para>6. Check the exposed wires at the connectors for nicks or signs of abrasion.</para><?Pub _newline?><para>7. Check for moisture inside the connector.</para></entry>
                <entry><para>The machine harness connectors are tight and free of corrosion.</para></entry>
                <entry><para><emphasis>Result:</emphasis> The machine harness connectors are tight and free of corrosion. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Voltage Of The Data Link</label>, Table <xref format="dita" href="#i08789944/i08789944.18" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The machine harness connectors are in need of repair.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.24" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table frame="all" id="i08789944.18" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="125.31*"/>
                <colspec colname="col2" colwidth="50.04*"/>
                <colspec colname="col3" colwidth="152.43*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Voltage Of The Data Link</para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center"><para>Values</para></entry>
                <entry align="center"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><para>1. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>2. Connect <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET) Service Tool and verify which ECMs have logged communication diagnostics. At each ECM or device that is not communicating, use an electrical spoon to measure the voltage. One at a time, measure the voltage of the CAN data link wires to frame ground.</para></entry>
                <entry><para>The reading is 0.5V to 4.5V on each wire.</para></entry>
                <entry><para><emphasis>Result:</emphasis> The voltages of the wires for the data links are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Terminating Resistors</label>, Table <xref format="dita" href="#i08789944/i08789944.21" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage is greater than 4.5 V.<?Pub _newline?><?Pub _newline?>Proceed to <label>Check For A Short To +Battery Circuit In The Data Link</label>, Table <xref format="dita" href="#i08789944/i08789944.22" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage is less than 0.5 V.<?Pub _newline?><?Pub _newline?>Proceed to <label>Check For Short To Ground In the Data Link</label>, Table <xref format="dita" href="#i08789944/i08789944.19" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table frame="all" id="i08789944.19" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="125.24*"/>
                <colspec colname="col2" colwidth="49.75*"/>
                <colspec colname="col3" colwidth="152.79*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For Short To Ground In the Data Link</para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center"><para>Values</para></entry>
                <entry align="center"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry colname="col1"><?Pub _cellfont Weight="medium"?><para>1. The key start switch and disconnect switch remain <position>OFF</position>.</para><?Pub _newline?><para>2. Disconnect the machine harness connectors from all electronic control modules that use the suspect <trademark>CAN</trademark> data link.</para><?Pub _newline?><para>3. At the machine harness for the Machine ECM, measure the resistance between frame ground and the positive <propname>CAN</propname> connector contact of the circuit.</para><?Pub _newline?><para>4. At the machine harness for the Machine ECM, measure the resistance between frame ground and the negative <propname>CAN</propname> connector contact of the circuit.</para></entry>
                <entry colname="col2"><para>The reading is greater than 5000 ohms.</para></entry>
                <entry colname="col3"><para><emphasis>Result:</emphasis> The harness circuit resistance is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check For A Short Between The Data Link Wires</label>, Table <xref format="dita" href="#i08789944/i08789944.20" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A reading is less than 5 ohms. The machine harness has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> There is a short between frame ground and the contacts of the <propname>CAN</propname> data link circuit in the machine harness. Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.24" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table frame="all" id="i08789944.20" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="124.59*"/>
                <colspec colname="col2" colwidth="50.58*"/>
                <colspec colname="col3" colwidth="152.60*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For A Short Between The Data Link Wires</para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center"><para>Values</para></entry>
                <entry align="center"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><?Pub _cellfont Weight="medium"?><para>1. The key start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the terminating resistors if the resistors are a part of the circuit.</para><?Pub _newline?><para>3. Measure the continuity between the data link wires.</para></entry>
                <entry><para>The reading is greater than 5000 ohms.</para></entry>
                <entry><para><emphasis>Result:</emphasis> The resistance measurement is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Terminating Resistors</label>, Table <xref format="dita" href="#i08789944/i08789944.21" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance measurement is not correct. The wires for the data link are shorted together.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair the machine harness or replace the harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.24" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table frame="all" id="i08789944.21" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="124.77*"/>
                <colspec colname="col2" colwidth="48.96*"/>
                <colspec colname="col3" colwidth="154.04*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Terminating Resistors</para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center"><para>Values</para></entry>
                <entry align="center"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><?Pub _cellfont Weight="medium"?><para>1. The key start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. The terminating resistors remain disconnected.</para><?Pub _newline?><para>3. Check the terminating resistor connectors for the following:</para><?Pub _newline?><para>-Moisture</para><para>-Corrosion</para><para>-Damaged Terminals</para><para>-Loose Connections</para><?Pub _newline?><para>4. Measure the resistance between terminal A and B of each terminating resistor that was removed from the CAN circuit.</para></entry>
                <entry><para>The reading is approx. 120 ohms.</para></entry>
                <entry><para><emphasis>Result:</emphasis> Both resistance measurements are approximately 120 ohms. The terminating resistors have not failed. Reinstall the terminating resistors. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check For A Short To +Battery Circuit In The Data Link</label>, Table <xref format="dita" href="#i08789944/i08789944.22" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or both resistance measurements are not approximately 120 ohms. At least one of the resistors is not functioning properly.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the terminating resistor or resistors that have failed. Reinstall the terminating resistor that has not failed. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.24" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table frame="all" id="i08789944.22" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="124.77*"/>
                <colspec colname="col2" colwidth="49.86*"/>
                <colspec colname="col3" colwidth="153.14*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For A Short To +Battery Circuit In The Data Link</para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center"><para>Values</para></entry>
                <entry align="center"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><para>1. The key start switch and disconnect switch are <position>OFF</position>.</para><?Pub _newline?><para>2. All related modules remain disconnected from the machine harness.</para><?Pub _newline?><para>3. At the machine harness connector for the Machine ECM, measure the resistance between the connector contact for the +Battery and the positive CAN connector contact.</para><?Pub _newline?><para>4. At the machine harness connector for the Machine ECM, measure the resistance between the connector contact for the +Battery and the negative CAN connector contact.</para></entry>
                <entry><para>The reading is greater than 5000 ohms.</para></entry>
                <entry><para><emphasis>Result:</emphasis> The harness circuit resistance is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Data Link For An Open</label>, Table <xref format="dita" href="#i08789944/i08789944.23" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A reading is less than 5 ohms. The machine harness has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> There is a short between the +battery circuit and one of the <propname>CAN</propname> data link circuits in the machine harness. Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.24" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table frame="all" id="i08789944.23" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="124.95*"/>
                <colspec colname="col2" colwidth="49.14*"/>
                <colspec colname="col3" colwidth="153.68*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Data Link For An Open</para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center"><para>Values</para></entry>
                <entry align="center"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><para><emphasis>Note:</emphasis> Two 120 ohms resistors should be on the CAN Data Link. A resistance of 60 ohms should be found at any point on the data link.</para><?Pub _newline?><para>1. The key start switch and disconnect switch are <position>OFF</position>.</para><?Pub _newline?><para>2. Use an electrical spoon to connect to the back of the harness connector for each ECM that has communication issues.</para><?Pub _newline?><para>3. Measure the resistance across the CAN line at each connector to find the open wire. If the resistance measurement is 60 ohms, that connector does not have an open between either terminating resistor. If the resistance measurement is 120 ohms, there is an open at that connector, between one of the terminating resistors. If the resistance is greater than 5000 ohms, there is an open between that connector and both terminating resistors. If there is a measurement of 40 ohms, there is an extra terminating resistor somewhere on the line. Once the section of harness containing the open is isolated, repair or replace the machine harness.</para></entry>
                <entry><?Pub _newline?><para>All resistance measurements are between 55 and 65 ohms</para></entry>
                <entry><para><emphasis>Result:</emphasis> The resistance measurements are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.24" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> At least one resistance measurement is greater than 65 ohms. If the resistance is approximately 115 to 125 ohms. There is an open in the harness.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.24" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> At least one resistance measurement is less than 55 ohms. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Look for the source of the short by disconnecting the terminating resistors and check the resistance again. If the resistance is still under 55 ohms, continue disconnecting ECMs and devices from the CAN circuit until the resistance goes up. <?Pub _newline?><?Pub _newline?>If everything is disconnected from the CAN circuit, and the resistance still is less than 55 ohms the harness has failed. <?Pub _newline?><?Pub _newline?>Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.24" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table id="i08789944.24" pgwide="1" tstbl="Y">
                <?PubTbl table border-top-width="0.20pt"?>
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
                <colspec colname="col1" colwidth="102.69*"/>
                <colspec colname="col2" colwidth="40.55*"/>
                <colspec colname="col3" colwidth="126.76*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
                </row>
                <row>
                <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center" valign="middle"><para>Values</para></entry>
                <entry align="center" valign="middle"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
                <entry><para>The DTC is no longer present.</para></entry>
                <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
            </sect>`,
            `<sect id="i08789944.25">
                <title>FMI 14</title>
                <table frame="all" id="i08789944.26" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="124.98*"/>
                <colspec colname="col2" colwidth="49.15*"/>
                <colspec colname="col3" colwidth="153.71*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For Related Diagnostic Trouble Codes</para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center"><para>Values</para></entry>
                <entry align="center"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><?Pub _cellfont Weight="medium"?><para>1. The FMI 14 DTC for the Data Link is active. Look for one of the active control module DTCs that is listed at the beginning of this procedure.</para></entry>
                <entry><para>One of the control module DTCs that is listed at the beginning of this procedure is active.</para></entry>
                <entry><para><emphasis>Result:</emphasis> One of the control module DTCs that is listed at the beginning of this procedure is active.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Go to the troubleshooting procedure for the active control module CID FMI DTC. Perform the troubleshooting procedure for the Data Link circuit that is detailed for the control module to isolate the problem. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.27" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table id="i08789944.27" pgwide="1" tstbl="Y">
                <?PubTbl table border-top-width="0.20pt"?>
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
                <colspec colname="col1" colwidth="102.98*"/>
                <colspec colname="col2" colwidth="40.48*"/>
                <colspec colname="col3" colwidth="126.54*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
                </row>
                <row>
                <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center" valign="middle"><para>Values</para></entry>
                <entry align="center" valign="middle"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
                <entry><para>The DTC is no longer present.</para></entry>
                <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
            </sect>`,
            `<sect id="i08789944.28">
                <title>FMI 19</title>
                <table frame="all" id="i08789944.29" pgwide="1" tstbl="Y">
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="col1" colwidth="124.81*"/>
                <colspec colname="col2" colwidth="49.87*"/>
                <colspec colname="col3" colwidth="153.19*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For Diagnostic Trouble Codes Related To Data Link</para></entry>
                </row>
                <row>
                <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center" valign="middle"><para>Values</para></entry>
                <entry align="center" valign="middle"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><para>1. Connect a laptop loaded with the latest version of <trademark>Cat</trademark> ET to the service connector.</para><?Pub _newline?><para>2. Note all DTCs related to the data link.</para><?Pub _newline?><para>3. Perform the troubleshooting procedure to correct the active DTCs.</para></entry>
                <entry><para>All troubleshooting has been performed, the DTC is no longer active.</para></entry>
                <entry><para><emphasis>Result:</emphasis> All troubleshooting has been performed, the DTC is no longer active. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.30" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> All troubleshooting has been performed, DTC is still active.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Perform this procedure again. If the failure is not found, replace the ECM.<?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08789944/i08789944.30" scope="local" type="table"></xref>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <table id="i08789944.30" pgwide="1" tstbl="Y">
                <?PubTbl table border-top-width="0.20pt"?>
                <tgroup cols="3">
                <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
                <colspec colname="col1" colwidth="103.28*"/>
                <colspec colname="col2" colwidth="40.41*"/>
                <colspec colname="col3" colwidth="126.31*"/>
                <thead>
                <row>
                <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
                </row>
                <row>
                <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
                <entry align="center" valign="middle"><para>Values</para></entry>
                <entry align="center" valign="middle"><para>Results</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
                <entry><para>The DTC is no longer present.</para></entry>
                <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
            </sect>`
          ]
          const genInfo = `<sect id="i08789944.1">
            <title>General Information</title>
            <para>Each <propname>CAN</propname> data link circuit is an input and output of select Electronic Control Modules (ECM). The data link is designed to carry communications between the ECMs. The data link consists of internal control circuits and the connecting harness wiring.</para>
            <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the <propname>CAN</propname> data link of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
            <para>The diagram or diagrams below are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
            </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08789944.2">
                <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
                <table frame="all" id="i08789944.3" pgwide="1" srtbl="Y">
                <tgroup cols="4">
                <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
                <colspec colname="COLSPEC3" colwidth="44.97*"/>
                <colspec colname="col2" colwidth="44.97*"/>
                <colspec colname="col3" colwidth="202.87*"/>
                <colspec colname="COLSPEC0" colwidth="164.99*"/>
                <thead>
                <row>
                <entry align="center" nameend="COLSPEC0" namest="COLSPEC3" valign="middle"><?Pub _cellfont Weight="bold"?><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
                </row>
                <row valign="middle">
                <entry align="center"><para>J1939</para></entry>
                <entry align="center"><para>CDL</para></entry>
                <entry align="center"><para>Code Description</para></entry>
                <entry align="center"><para>System Response</para></entry>
                </row>
                </thead>
                <tbody>
                <row>
                <entry align="center"><para><code>###-2</code></para></entry>
                <entry align="center"><para><code>###-2</code></para></entry>
                <entry><para><codedesc>####: Data Erratic, Intermittent, or Incorrect</codedesc></para></entry>
                <entry><para>####</para></entry>
                </row>
                <row>
                <entry align="center"><para><code>###-9</code></para></entry>
                <entry align="center"><para><code>###-9</code></para></entry>
                <entry><para><codedesc>####: Abnormal Update Rate</codedesc></para></entry>
                <entry><para>####</para></entry>
                </row>
                <row>
                <entry align="center"><para><code>###-14</code></para></entry>
                <entry align="center" colname="col2"><para><code>###-14</code></para></entry>
                <entry colname="col3"><para><codedesc>####: Special Instruction</codedesc></para></entry>
                <entry><para>####</para></entry>
                </row>
                <row>
                <entry align="center"><para><code>###-19</code></para></entry>
                <entry align="center"><para><code>###-19</code></para></entry>
                <entry><para><codedesc>####: Data Error</codedesc></para></entry>
                <entry><para>####</para></entry>
                </row>
                </tbody>
                </tgroup>
                </table>
                <figure figure-style="page-wide" id="i08789944.4">
                <graphic controlno="g03639859" href="x-wc://file=g03639859.cnv"/>
                <caption>
                <para>CAN Data Link Connections</para>
                </caption>
                </figure>
                </sect>`;
          }
      
          let dtc = `<sect id="i08789944.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08789944.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. Check the wiring for pinch points or abrasions. Look for and repair areas that indicate wires are exposed. If a problem with a connection is found, correct the problem and verify that this DTC is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i08789944.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08789944.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      }
      // Function for script 3
      function script3() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
            `<randitem>FMI <code>9</code>, proceed to <xref format="dita" href="#i10149042/i10149042.9" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>14</code>, proceed to <xref format="dita" href="#i10149042/i10149042.15" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i10149042.9">
            <title>FMI 9</title>
            <table frame="all" id="i10149042.10" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="119.76*"/>
            <colspec colname="col2" colwidth="49.44*"/>
            <colspec colname="col3" colwidth="150.22*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Verify The Hardware And The Software Part Numbers<fn id="i10149042.11" outputclass="1">
            <para>Consult the Technical Communicator for the correct part numbers of the flash software.</para>
            </fn></para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. Verify the part number of the flash software for the ECM.</para><?Pub _newline?><para>2. Verify the part number of all components related to the faulty Data Link Circuit.</para></entry>
            <entry><para>All part numbers are correct.</para></entry>
            <entry><para><emphasis>Result:</emphasis> All part numbers are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check For Shorts</label>, Table <xref format="dita" href="#i10149042/i10149042.12" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> All the part numbers are not correct.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> A module has the wrong part number or the incorrect flash software is installed. Replace the incorrect module with a module that has the correct part number. Flash the correct software. <?Pub _newline?><?Pub _newline?>See the <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle infotype="ie-tadj">ECM Software - Install</pubtitle></ie-topic></pubref> section of this manual for additional information. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i10149042/i10149042.14" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table frame="all" id="i10149042.12" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="119.44*"/>
            <colspec colname="col2" colwidth="49.51*"/>
            <colspec colname="col3" colwidth="150.47*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check For Shorts</para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry colname="col1"><?Pub _cellfont Weight="medium"?><para>1. Turn the key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the machine harness connectors from all electronic control modules that use the suspect <trademark>Cat</trademark> Data Link.</para><?Pub _newline?><para>3. At the machine harness for the ECM, measure the resistance between the positive contact for the Cat Data Link. Measure the resistance of all other positive contacts used in J1 and J2 harness connectors.</para><?Pub _newline?><para>4. At the machine harness for the ECM, measure the resistance between the negative contact for the Cat Data Link. Measure all other negative contacts used in J1 and J2 harness connectors.</para></entry>
            <entry colname="col2"><para>The reading is greater than 5000 ohms.</para></entry>
            <entry colname="col3"><para><emphasis>Result:</emphasis> The harness circuit resistance is correct. <?Pub _newline?><?Pub _newline?>Proceed to Check For Open Harness, Table <xref format="dita" href="#i10149042/i10149042.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A reading is less than 5 ohms. The machine harness has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Short between frame ground and the contacts of the <propname>Cat</propname> Data Link circuit in the machine harness. Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i10149042/i10149042.14" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table frame="all" id="i10149042.13" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="120.04*"/>
            <colspec colname="col2" colwidth="48.90*"/>
            <colspec colname="col3" colwidth="150.48*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check For Open Harness</para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and disconnect switch are <position>OFF</position>.</para><?Pub _newline?><para>2. All related electronic control modules remain disconnected from the machine harness.</para><?Pub _newline?><para>3. At the machine harness connector for one ECM, place a jumper wire between the positive and negative contacts for the Cat Data Link.</para><?Pub _newline?><para>4. At the machine harness connector for another ECM, measure resistance between the positive and negative contacts for the Cat Data Link.</para></entry>
            <entry><para>Reading is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The Cat Data Link circuit in the machine harness is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i10149042/i10149042.14" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A reading is greater than 5000 ohms. The machine harness has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The <trademark>Cat</trademark> Data Link circuit is open in the machine harness. Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i10149042/i10149042.14" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i10149042.14" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="101.52*"/>
            <colspec colname="col2" colwidth="40.81*"/>
            <colspec colname="col3" colwidth="127.67*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i10149042.15">
            <title>FMI 14</title>
            <table frame="all" id="i10149042.16" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="119.26*"/>
            <colspec colname="col2" colwidth="48.08*"/>
            <colspec colname="col3" colwidth="150.03*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For Related Diagnostic Trouble Codes</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. The FMI <code>14</code> DTC for the Data Link is active. Look for one of the active control module DTC that is listed at the beginning of this procedure.</para></entry>
            <entry><para>One of the control module DTC that is listed at the beginning of this procedure is active.</para></entry>
            <entry><para><emphasis>Result:</emphasis> One of the control module DTC that is listed at the beginning of this procedure is active.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Go to the troubleshooting procedure for the active control module CID FMI DTC. Perform the troubleshooting procedure for the Data Link circuit that is detailed for the control module to isolate the problem. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i10149042/i10149042.17" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i10149042.17" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="101.52*"/>
            <colspec colname="col2" colwidth="40.81*"/>
            <colspec colname="col3" colwidth="127.67*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
        </sect>`
          ]
          const genInfo = `<sect id="i10149042.1">
          <title>General Information</title>
          <para>Each <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Data Link circuit is an input and output of select electronic control modules (ECM). The data link is designed to carry communications between the electronic control modules. The data link is not a visible component. The data link consists of internal control circuits and the connecting harness wiring.</para>
          <para>The diagnostic trouble code (DTC) is caused by abnormal communications between the ECM and a specific ECM module via the Data Link. The update rate is not correct. If a DTC is present, correct the related DTC.</para>
          <para>This failure results in events that are logged against an ECM that cannot be explained directly. The ECM cannot communicate with another ECM or the ECM appears to communicate intermittently.</para>
          <para>The <code>248-9</code> DTC is used by the ECM as a companion DTC and indicates a <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Data Link problem. This DTC indicates that the ECM has lost all communication with another ECM. This companion DTC is simultaneously activated with the <code>590-9</code> DTC.</para>
          <note><para>The <code>248-9</code> DTC will never be activated by the ECM as a stand-alone DTC.</para></note>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Data Link of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The diagram or diagrams below are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
      </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i10149042.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i10149042.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC0" colwidth="31.04*"/>
            <colspec colname="col1" colwidth="31.04*"/>
            <colspec colname="col2" colwidth="124.52*"/>
            <colspec colname="col3" colwidth="108.46*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="COLSPEC0" valign="middle"><?Pub _cellfont Weight="bold"?><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>J1939</para></entry>
            <entry align="center"><para>CDL</para></entry>
            <entry align="center"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para><code>####-9</code></para></entry>
            <entry align="center" colname="col1"><para><code>####-9</code></para></entry>
            <entry colname="col2"><para><codedesc>####: Abnormal Update Rate</codedesc></para></entry>
            <entry colname="col3"><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><para><code>####-14</code></para></entry>
            <entry align="center"><para><code>####-14</code></para></entry>
            <entry><para><codedesc>####: Special Instruction</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure figure-style="page-wide" id="i10149042.4">
            <graphic controlno="g03640118" href="x-wc://file=g03640118.cnv"/>
            <caption>
            <para>Cat Data Link Schematic</para>
            </caption>
            </figure>
        </sect>`;
          }
      
          let dtc = `<sect id="i10149042.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i10149042.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. Check the wiring for pinch points or abrasions. Look for and repair areas that indicate wires are exposed. If a problem with a connection is found, correct the problem and verify that this DTC is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i10149042.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i10149042.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      }  
      function script4() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
          `<randitem>FMI <code>2</code>, proceed to <xref format="dita" href="#i08790097/i08790097.10" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i08790097.10">
            <title>FMI 2</title>
            <table frame="all" id="i08790097.11" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="132.74*"/>
            <colspec colname="col2" colwidth="53.54*"/>
            <colspec colname="col3" colwidth="165.92*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Verify Hardware And Software Part Numbers</para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Verify that the part numbers for the ECM are correct.</para><?Pub _newline?><para><emphasis>Note:</emphasis>Consult the Technical Communicator at the dealer for the correct part numbers.</para></entry>
            <entry><para>All part numbers are correct.</para></entry>
            <entry><para><emphasis>Result:</emphasis> All part numbers are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>The Location Code Should Match The Summary Screen</label>, Table <xref format="dita" href="#i08790097/i08790097.12" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> All part numbers are NOT correct. The installed ECM has the wrong part number or incorrect configuration software.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Reinstall correct software in the ECM or replace the ECM with the correct part number.<?Pub _newline?><?Pub _newline?><emphasis>NOTE:</emphasis> Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790097/i08790097.16" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table frame="all" id="i08790097.12" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="132.74*"/>
            <colspec colname="col2" colwidth="53.54*"/>
            <colspec colname="col3" colwidth="165.92*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>The Location Code Should Match The Summary Screen</para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Check the <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET) Service Tool summary screen for the location code.</para><?Pub _newline?><para>Refer to Table <xref href="#i08790097/i08790097.5" type="table"></xref> above to verify that the location code matches the location codes in the summary screen.</para><?Pub _newline?></entry>
            <entry><para>The location codes in <trademark>Cat</trademark> ET are correct.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The location codes in <trademark>Cat</trademark> ET are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Inspect The Harness Connections</label>, Table <xref format="dita" href="#i08790097/i08790097.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The location codes are NOT correct. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Rewire wiring harness to reflect the correct ECM harness location code. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790097/i08790097.16" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table frame="all" id="i08790097.13" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="132.74*"/>
            <colspec colname="col2" colwidth="53.54*"/>
            <colspec colname="col3" colwidth="165.92*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Inspect The Harness Connections</para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Inspect the harness connections that are related to the location code. Make sure that the connectors are clean and tight.</para></entry>
            <entry><para>The machine harness connections are tight and free of corrosion.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The machine harness connectors are tight and free from corrosion. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Harness For A Short</label>, Table <xref format="dita" href="#i08790097/i08790097.14" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The machine harness connectors are in the need of repair.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790097/i08790097.16" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table frame="all" id="i08790097.14" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="132.55*"/>
            <colspec colname="col2" colwidth="53.35*"/>
            <colspec colname="col3" colwidth="166.30*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Harness For A Short</para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The disconnect switch and the key start switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the machine harness from the ECM.</para><?Pub _newline?><para>3. At the ECM harness connector, measure the resistance between the location code contacts and all the other contacts that are used for the ECM.</para><?Pub _newline?><para><emphasis>Note:</emphasis> Refer to the table above for the ECM location code connections.</para></entry>
            <entry><para>Each resistance is greater than 5000 ohms.</para><para><?Pub _newline?><emphasis>NOTE:</emphasis> If one of the contacts in the harness is frame ground, then there would be a short to ground.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance is greater than 5000 ohms. The harness circuit is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Harness For An Open</label>, Table <xref format="dita" href="#i08790097/i08790097.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more readings less than 5 ohms. The short is between the location code and the circuit with the low resistance.<?Pub _newline?><?Pub _newline?><emphasis>NOTE:</emphasis> If one of the contacts in the harness is for frame ground, these measurements are correct. Do not repair. Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790097/i08790097.16" scope="local" type="table"></xref>.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790097/i08790097.16" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table frame="all" id="i08790097.15" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="132.36*"/>
            <colspec colname="col2" colwidth="54.11*"/>
            <colspec colname="col3" colwidth="165.73*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Harness For An Open</para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The disconnect switch and the key start switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. The ECM harness connectors remain disconnected.</para><?Pub _newline?><para>3. At the machine harness for the ECM, measure the resistance between the location code contacts and frame ground.</para><?Pub _newline?><para><emphasis>Note:</emphasis> Refer to the table above for the ECM location code connections.</para></entry>
            <entry><para>Each contact that is grounded has a resistance less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each contact that is grounded has a resistance that is less than 5 ohms. The harness circuit is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790097/i08790097.16" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> When all four contacts are grounded, one or more readings is greater than 5 ohms. The machine harness has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair -</emphasis> Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790097/i08790097.16" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790097.16" pgwide="y" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="132.07*"/>
            <colspec colname="col2" colwidth="54.09*"/>
            <colspec colname="col3" colwidth="166.04*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?PubTbl cell border-top-width="1.00pt"?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="top"><para>Values</para></entry>
            <entry align="center" valign="top"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
        </sect>`
          ]
          const genInfo = `<sect id="i08790097.1">
          <title>General Information</title>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the Electronic Control Module (ECM) location codes of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The following diagram or diagrams are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790097.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i08790097.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC1" colwidth="47.97*"/>
            <colspec align="center" colname="col2" colwidth="47.97*"/>
            <colspec colname="col3" colwidth="198.87*"/>
            <colspec colname="COLSPEC0" colwidth="165.77*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1" valign="top"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>J1939</para></entry>
            <entry valign="top"><para>CDL</para></entry>
            <entry align="center" valign="top"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center" valign="top"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para><code>####-2</code></para></entry>
            <entry><para><code>####-2</code></para></entry>
            <entry><para><codedesc>ECM Location Code: Erratic, Intermittent, or Incorrect</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure id="i08790097.4">
            <graphic controlno="g03642985" href="x-wc://file=g03642985.cnv"/>
            <caption>
            <para>ECM Location Code connections</para>
            </caption>
            </figure>
            <table frame="all" id="i08790097.5" pgwide="1">
            <tgroup cols="5" colsep="1" rowsep="1">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec char="." colname="col1" colwidth="111*"/>
            <colspec char="." colname="col2" colwidth="65*"/>
            <colspec char="." colname="col3" colwidth="74*"/>
            <colspec char="." colname="col4" colwidth="101*"/>
            <colspec char="." colname="col5" colwidth="89*"/>
            <tbody>
            <row>
            <entry align="center" nameend="col5" namest="col1" valign="middle"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>Location Code</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>Hardware Location Code</para></entry>
            <entry align="center" nameend="col3" namest="col2" valign="middle"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>#### ECM</para></entry>
            <entry align="center" colname="col4" valign="middle"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>#### ECM</para></entry>
            <entry align="center" valign="middle"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>Contact</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para><trademark>Cat</trademark> ET Location Code</para></entry>
            <entry align="center" nameend="col3" namest="col2" valign="middle"><para>####</para></entry>
            <entry align="center" colname="col4" valign="middle"><para>####</para></entry>
            <entry align="center" valign="middle"><para>-</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para><label>LOC Enable</label></para></entry>
            <entry align="center" nameend="col3" namest="col2" valign="middle"><para>GND</para></entry>
            <entry align="center" colname="col4" valign="middle"><para>GND</para></entry>
            <entry align="center" valign="middle"><para>J1 - ####</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>LOC 0</para></entry>
            <entry align="center" nameend="col3" namest="col2" valign="middle"><para>####</para></entry>
            <entry align="center" colname="col4" valign="middle"><para>####</para></entry>
            <entry align="center" valign="middle"><para>J1 - ####</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>LOC 1</para></entry>
            <entry align="center" nameend="col3" namest="col2" valign="middle"><para>####</para></entry>
            <entry align="center" colname="col4" valign="middle"><para>####</para></entry>
            <entry align="center" valign="middle"><para>J1 - ####</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>LOC 2</para></entry>
            <entry align="center" nameend="col3" namest="col2" valign="middle"><para>####</para></entry>
            <entry align="center" colname="col4" valign="middle"><para>####</para></entry>
            <entry align="center" valign="middle"><para>J1 - ####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <note><para>The table above describes the connections of the machine location codes.</para></note>
            </sect>`;
          }
      
          let dtc = `<sect id="i08790097.6">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790097.7" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i08790097.8">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790097.9">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      }  
      function script5() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const genInfo = `<refer><para><pubref><pubtype>Special Instruction</pubtype><media><formno>SEHS9615</formno></media><pubtitle>Servicing DT Connectors</pubtitle></pubref>.</para></refer>
          <refer><para><pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0148</formno></media><pubtitle>Listing Of Deutsch Connector Components</pubtitle></pubref></para></refer>
          <refer><para><pubref><pubtype>Special Instruction</pubtype><media><formno>SEHS9065</formno></media><pubtitle>Use Of CE Connector Tools</pubtitle></pubref>.</para></refer>
          <refer><para><pubref><pubtype>Service Magazine</pubtype><media><formno>SEPD0342</formno></media><pubdate day="27" month="JAN" year="97"/><pubtitle>Field Repair Of Single Wire Breaks In Harnesses (Sealed Splice)</pubtitle></pubref>.</para></refer>
          <refer><para><pubref><pubtype>Service Magazine</pubtype><media><formno>SEPD0371</formno></media><pubdate day="28" month="JUL" year="97"/><pubtitle>Protection Of Unsealed Electrical Terminations For Machines In Corrosive Applications</pubtitle></pubref>.</para></refer>
          <refer><para><pubref><pubtype>Service Magazine</pubtype><media><formno>SEPD0473</formno></media><pubdate day="24" month="MAY" year="99"/><pubtitle>New DT Connector Plugs With Improved Seal Retention</pubtitle></pubref>.</para></refer>
          <refer><para><pubref><pubtype>Service Magazine</pubtype><media><formno>SEPD0545</formno></media><pubdate day="09" month="OCT" year="00"/><pubtitle>Dielectric Grease Should Not Be Used In Electrical Connectors</pubtitle></pubref>.</para></refer>
          <refer><para><pubref><pubtype>Pocket Guide</pubtype><media><formno>SEBD0402</formno></media><pubtitle>Guidelines For Routing And Installing Wire Harness Assemblies</pubtitle></pubref>.</para></refer>
          <para>This information will help with detecting problems with connectors and with wiring. If a problem is found, correct the condition and verify that the problem is resolved.</para>
          <para>Disconnecting and reconnecting connectors sometimes resolve intermittent electrical problems. Checking for diagnostic trouble codes (DTCs) immediately before disconnecting a connector is important. Also check for DTCs after reconnecting the connector. If the status of a DTC is changed due to disconnecting and reconnecting a connector, there are several possible reasons. The likely reasons are loose terminals, improperly crimped terminals, moisture, corrosion, and inadequate mating of a connection.</para>
          <sect id="i08790098.1">
          <title>Important Safety Information</title>
          <para>Work safely. Most accidents that involve product operation, maintenance, and repair are caused by failure to observe basic safety rules or precautions. An accident can often be avoided by recognizing potentially hazardous situations before an accident occurs.</para>
          <para>A technician must be alert to potential hazards. This technician should also have the necessary training, skills, and tools to perform these functions properly.</para>
          <para>Safety precautions and warnings are provided in this instruction and on the product. If these hazard warnings are not heeded, bodily injury or death could occur to you or to other persons. <propname>Caterpillar</propname> cannot anticipate every possible circumstance that might involve a potential hazard.</para>
          <para>Therefore, the warnings in this publication and the warnings that are on the product are not all inclusive. If a tool, procedure, work method, or operating technique, not recommended by <propname>Caterpillar</propname> is used, make sure that the procedure is safe for all people.</para>
          <para>Make sure that the product will not be damaged or be made unsafe by the operation, lubrication, maintenance, or the repair procedures that are used.</para>
          </sect>
          <sect id="i08790098.2">
          <title>Guidelines</title>
          <randlist>
          <randitem>Always use a <cpn-id><partno> 1U-5804</partno><cpn>Crimp Tool</cpn><cpnmod>12-GA TO 18-GA</cpnmod></cpn-id> to service <propname>Deutsch</propname> HD and DT connectors. Never solder the terminals onto the wires. Refer to <pubref><pubtype>Tool Operating Manual</pubtype><media><formno>SEHS9615</formno></media><pubtitle>Servicing <propname>Deutsch</propname> HD and DT Style Connectors</pubtitle></pubref>.</randitem>
          <randitem>Always use a <cpn-id><partno>147-6456</partno><cpn>Wedge Removal Tool</cpn></cpn-id> to remove wedges from DT connectors. Never use a screwdriver to pry a wedge from a connector.</randitem>
          <randitem>Always use a breakout harness for a voltmeter probe or a test light. Never break the insulation of a wire to access to a circuit for measurements.</randitem>
          <randitem>If a wire is cut, always install a new terminal for the repair.</randitem>
          </randlist>
          </sect>
          <sect id="i08790098.3">
          <title>Tests</title>
          <sect id="i08790098.4">
          <title>Check Connectors for Moisture and Corrosion</title>
          <figure id="i08790098.5">
          <graphic controlno="g01960167" href="x-wc://file=g01960167.cnv"/>
          <caption>
          <callist>
          <callpara><callout>1</callout><para>Former Seal Design</para></callpara>
          <callpara><callout>2</callout><para>Current Seal Design</para></callpara>
          </callist>
          </caption>
          </figure>
          <para>The plug end of the DT connector has a seal at the mating end of the connector. The seal has been improved on black connectors to help prevent slipping. The seal is also replaceable. This improvement will help keep moisture and dirt from entering the connector.</para>
          <para>The current seal design <callout>2</callout> is not interchangeable with the former design <callout>1</callout>. The receptacle has also changed to the new colors.</para>
          <figure id="i08790098.6">
          <graphic controlno="g01960176" href="x-wc://file=g01960176.cnv"/>
          <caption>
          <callist>
          <callpara><callout>3</callout><para>Seal for a Three-Pin Connector (Typical Example)</para></callpara>
          </callist>
          </caption>
          </figure>
          <table frame="all" id="i08790098.7" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="119*"/>
          <colspec colname="col2" colwidth="40*"/>
          <colspec colname="col3" colwidth="115*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Inspect All Wiring Harnesses</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry colname="col1"><para>1. Ensure that the routing of the wiring harness allows the wires to enter the face of each connector at a perpendicular angle. (Otherwise, the wire will deform the seal bore. This condition will create a path for the entrance of moisture.)</para><?Pub _newline?><para>2. Verify that the seals for the wires are sealing correctly.</para><?Pub _newline?><para>3. Disconnect the suspect connector and inspect the connector seal. Ensure that the seals are in good condition. If necessary, replace the connector.</para><?Pub _newline?><para>4. Thoroughly inspect the connectors for evidence of moisture entry.</para></entry>
          <entry colname="col2"><para>The harness wiring, connectors, and seals are in good condition.</para><?Pub _newline?><para>There is no evidence of moisture in the connectors.</para></entry>
          <entry colname="col3"><para><emphasis>Result:</emphasis> The harness wiring, connectors, and seals are in good condition. <?Pub _newline?><?Pub _newline?>Proceed to <xref href="#i08790098/i08790098.8" type="sect"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A problem has been found with the harness or the connectors.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair the connectors or the wiring, as required. Ensure that all the seals are properly in place. Ensure that the connectors have been reattached. If corrosion is evident on the pins, sockets, or the connector, use only denatured alcohol to remove the corrosion. Use a cotton swab or a soft brush to remove the corrosion. If moisture was found in the connectors, run the engine for several minutes and check again for moisture. If moisture reappears, the moisture is wicking into the connector. Even if the moisture entry path is repaired, replacing the wires may be necessary. Verify that the repair eliminates the problem.<?Pub _newline?><?Pub _newline?><emphasis>STOP.</emphasis></para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Some minor seal abrasion on connector seals is normal. Minor seal abrasion will not allow the entry of moisture. If moisture or corrosion is evident in the connector, the source of the moisture entry must be found and repaired. If the source of the moisture entry is not repaired, the problem will recur. Simply drying the connector will not fix the problem. Check the following items for the possible moisture entry path:</para>
          <randlist>
          <randitem>Missing seals</randitem>
          <randitem>Improperly installed seals</randitem>
          <randitem>Nicks in exposed insulation</randitem>
          <randitem>Improperly mated connectors</randitem>
          </randlist>
          <para>Moisture can also travel to a connector inside a wire. If moisture is found in a connector, thoroughly check the connectors harness for damage. Also check other connectors that share the harness for moisture.</para>
          </sect>
          <sect id="i08790098.8">
          <title>Check the Wires for Damage to the Insulation</title>
          <para>Carefully inspect each wire for signs of abrasion, of nicks, and of cuts. Inspect the wires for the following conditions:</para>
          <randlist>
          <randitem>Exposed insulation</randitem>
          <randitem>Rubbing of a wire against the chassis</randitem>
          <randitem>Rubbing of a wire against a sharp point</randitem>
          </randlist>
          <table frame="all" id="i08790098.9" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="114*"/>
          <colspec colname="col2" colwidth="38*"/>
          <colspec colname="col3" colwidth="127*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check All Wiring Harness Fasteners</para></entry>
          </row>
          <row valign="middle">
          <entry><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry colname="col1"><para>1. Check all the fasteners to verify that the harness is secure and is NOT compressed.</para><?Pub _newline?><para>2. Pull back the harness sleeves to check for a flattened portion of wire. (A fastener that has been overtightened will flatten the harness.)</para></entry>
          <entry colname="col2"><para>The wires are free of abrasion, of nicks, and of cuts and the harness is properly clamped.</para></entry>
          <entry colname="col3"><para><emphasis>Result:</emphasis> The harness has passed all checks. <?Pub _newline?><?Pub _newline?>Proceed to <xref href="#i08790098/i08790098.10" type="sect"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> There is damage to the harness.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair the wires or replace the wires, as required. Verify that the repair eliminates the problem.<?Pub _newline?><?Pub _newline?><emphasis>STOP.</emphasis></para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          </sect>
          <sect id="i08790098.10">
          <title>Inspect the Connector Terminals</title>
          <table frame="all" id="i08790098.11" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="119*"/>
          <colspec colname="col2" colwidth="45*"/>
          <colspec colname="col3" colwidth="132*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Visually inspect each terminal in the connector</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry colname="col1"><para>1. Verify that the terminals are not damaged. Verify that the terminals are properly aligned in the connector and verify that the terminals are properly seated.</para></entry>
          <entry colname="col2"><para>The terminals are properly aligned and the terminals appear undamaged.</para></entry>
          <entry colname="col3"><para><emphasis>Result:</emphasis> The terminals show no signs of damage. <?Pub _newline?><?Pub _newline?>Proceed to <xref href="#i08790098/i08790098.15" type="sect"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The terminals of the connector are damaged.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair the terminals and/or replace the terminals, as required. Verify that the repair eliminates the problem.<?Pub _newline?><?Pub _newline?><emphasis>STOP.</emphasis></para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          </sect>
          <sect id="i08790098.12">
          <title>Perform a Pull Test on Each Wire Terminal Connection</title>
          <figure id="i08790098.13">
          <graphic controlno="g02732798" href="x-wc://file=g02732798.cnv"/>
          <caption>
          <callist>
          <callpara><callout>4</callout><para>Locking Wedge for 3-Pin Connector</para></callpara>
          </callist>
          </caption>
          </figure>
          <table frame="all" id="i08790098.14" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="119*"/>
          <colspec colname="col2" colwidth="45*"/>
          <colspec colname="col3" colwidth="132*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check Locking Wedge Of Connector</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry colname="col1"><para>1. Ensure that the locking wedge for the connector is installed properly. (Refer to the figure above.)</para><?Pub _newline?><para>2. Perform the <unitsgrp><metric>45 N</metric><english>10 lb</english></unitsgrp> pull test on each wire. (Each terminal and each connector should easily withstand <unitsgrp><metric>45 N</metric><english>10 lb</english></unitsgrp> of tension and each wire should remain in the connector body.)</para></entry>
          <entry colname="col2"><para>This test confirms that the wire was properly crimped in the terminal and the terminal was properly inserted into the connector.</para></entry>
          <entry colname="col3"><para><emphasis>Result:</emphasis> All terminals pass the pull test. <?Pub _newline?><?Pub _newline?>Proceed to <xref href="#i08790098/i08790098.15" type="sect"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A wire has been pulled from a terminal or a terminal has been pulled from the connector.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Use the <cpn-id><partno> 1U-5804</partno><cpn>Crimp Tool</cpn><cpnmod>12-GA TO 18-GA</cpnmod></cpn-id> to replace the terminal. Replace damaged connectors, as required. Verify that the repair eliminates the problem.<?Pub _newline?><?Pub _newline?><emphasis>STOP.</emphasis></para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          </sect>
          <sect id="i08790098.15">
          <title>Check Individual Pin Retention into the Socket</title>
          <table frame="all" id="i08790098.16" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="119*"/>
          <colspec colname="col2" colwidth="45*"/>
          <colspec colname="col3" colwidth="132*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Confirm Pin Retention At Sockets</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry colname="col1"><para>1. Disconnect the harness.</para><?Pub _newline?><para>2. Insert a new pin into each socket of the mating plug individually to check for a good grip on the pin by the socket.</para></entry>
          <entry colname="col2"><para>The sockets provide good retention for the new pin.</para></entry>
          <entry colname="col3"><para><emphasis>Result:</emphasis> The terminals are OK.<?Pub _newline?><?Pub _newline?>Proceed to <xref href="#i08790098/i08790098.17" type="sect"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> Terminals are damaged. <emphasis>Repair:</emphasis> Use the <cpn-id><partno> 1U-5804</partno><cpn>Crimp Tool</cpn><cpnmod>12-GA TO 18-GA</cpnmod></cpn-id> to replace the damaged terminals. Verify that the repair eliminates the problem.<?Pub _newline?><?Pub _newline?><emphasis>STOP.</emphasis></para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          </sect>
          <sect id="i08790098.17">
          <title>Check the Locking Mechanism of the Connectors</title>
          <table frame="all" id="i08790098.18" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="119*"/>
          <colspec colname="col2" colwidth="45*"/>
          <colspec colname="col3" colwidth="132*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check Locking Mechanism Of Connectors</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry colname="col1"><para>1. Lock the connectors, and ensure that the two halves cannot be pulled apart.</para><?Pub _newline?><para>2. Verify that the latch tab of the connector is properly latched. Also verify that the latch tab of the connector returns to the locked position.</para></entry>
          <entry colname="col2"><para>The connectors lock securely. No cracks or breaks are found at the connectors.</para></entry>
          <entry colname="col3"><para><emphasis>Result:</emphasis> The connectors are in good condition. <?Pub _newline?><?Pub _newline?>Proceed to <xref href="#i08790098/i08790098.19" type="sect"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A connector locking mechanism is damaged or missing.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair the connector or replace the connector, as required. Verify that the repair eliminates the problem.<?Pub _newline?><?Pub _newline?><emphasis>STOP.</emphasis></para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          </sect>
          <sect id="i08790098.19">
          <title>Perform the Wiggle Test on the <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET) Service Tool</title>
          <table frame="all" id="i08790098.20" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="119*"/>
          <colspec colname="col2" colwidth="45*"/>
          <colspec colname="col3" colwidth="132*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Perform A Wiggle Test</para></entry>
          </row>
          <row valign="middle">
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry colname="col1"><para>1. Select the Wiggle Test from the diagnostic tests on <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (<trademark>Cat</trademark> ET) Service Tool.</para><?Pub _newline?><para>2. Choose the appropriate group of parameters to monitor.</para><?Pub _newline?><para>3. Press the <label>Start</label> button. Wiggle the wiring harness to reproduce intermittent problems.</para><?Pub _newline?><para>If an intermittent problem exists, the status will be highlighted and an audible beep will be heard.</para></entry>
          <entry colname="col2"><para>No intermittent problems were indicated during the Wiggle Test.</para></entry>
          <entry colname="col3"><para><emphasis>Result:</emphasis> No intermittent problems were found. The harness and connectors appear to be OK. If another procedure recommended this test, return to that procedure and continue testing. If the problem has been resolved, return the machine to service.<?Pub _newline?><?Pub _newline?>STOP.</para><?Pub _newline?><para><emphasis>Result:</emphasis> At least one intermittent problem was indicated.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair the harness or the connector. Verify that the repair eliminates the problem.<?Pub _newline?><?Pub _newline?><emphasis>STOP.</emphasis></para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          </sect>
          </sect>`;
          output = genInfo;
      
          navigator.clipboard.writeText(output);
      }
      function script6() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
              `<randitem>FMI <code>2</code>, proceed to <xref format="dita" href="#i08790099/i08790099.9" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>3</code>, proceed to <xref format="dita" href="#i08790099/i08790099.16" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>4</code>, proceed to <xref format="dita" href="#i08790099/i08790099.23" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i08790099.9">
            <title>FMI 2</title>
            <table frame="all" id="i08790099.10" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="118.05*"/>
            <colspec colname="col2" colwidth="47.41*"/>
            <colspec colname="col3" colwidth="148.66*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check System Voltage At The ECM</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the disconnect switch and the key start switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. At the J1 harness connector for the ECM, insert a Multimeter Probe along the power supply. Use the other multimeter probe to make contact to frame ground.</para><?Pub _newline?><para>3. Turn the disconnect switch <position>ON</position>. Start the engine and run at half throttle.</para><?Pub _newline?><para>4. Measure the voltage between the power supply contact and frame ground.</para><?Pub _newline?><para>5. Measure the voltage between the power supply contact and the (-) battery contact at the ECM harness connector.</para></entry>
            <entry><para>Both voltages are approximately the same and are within range of the system voltage.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each voltage is approximately the same and is within range of the system voltage. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790099/i08790099.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltages are approximately the same, however the voltages are unstable. There is a large variation in the voltages. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Alternator Current Output</label> Table <xref format="dita" href="#i08790099/i08790099.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The positive battery contact to frame ground measurement is stable and within range of the system voltage. However, the measurement between the ECM positive battery contact and the ECM negative battery contact is not always in the correct range. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Ground Circuits</label> Table <xref format="dita" href="#i08790099/i08790099.11" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.11" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.05*"/>
            <colspec colname="col2" colwidth="47.41*"/>
            <colspec colname="col3" colwidth="148.65*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Ground Circuits</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the J1 harness connector from the ECM.</para><?Pub _newline?><para>3. At the J1 harness connector for the ECM, measure the resistance between each of the negative battery contacts and frame ground. The contacts for the negative battery connections are illustrated in the diagram at the beginning of this procedure.</para></entry>
            <entry><para>Each resistance is less than 5.0 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each resistance is less than 5.0 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Supply Circuits</label> Table <xref format="dita" href="#i08790099/i08790099.12" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A resistance is greater than 5000 ohms. There is an open circuit or a poor connection in the ground circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Check all the connectors and splice points that are in the ground circuit. Ensure that all connections are clean, secure, and in good condition. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790099/i08790099.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.12" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.05*"/>
            <colspec colname="col2" colwidth="47.41*"/>
            <colspec colname="col3" colwidth="148.66*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Supply Circuits</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and disconnect switch remain in the <position>OFF</position> position. The ECM harness connector remains disconnected.</para><?Pub _newline?><para>2. At the J1 harness connector for the ECM measure the resistance between the alternator <label>B</label> terminal and each of the positive battery contacts of the J1 harness. The contacts for the five positive battery connections are illustrated in the diagram at the beginning of this procedure.</para></entry>
            <entry><para>Each resistance is less than 5.0 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each resistance is less than 5.0 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790099/i08790099.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A resistance is greater than 5000 ohms. There is an open circuit or a poor connection in the supply circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The open or poor connection is in the ground circuit. Check all the connectors and splice points that are in the ground circuit. Ensure that all connections are clean, secure, and in good condition. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790099/i08790099.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.13" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.05*"/>
            <colspec colname="col2" colwidth="47.41*"/>
            <colspec colname="col3" colwidth="148.66*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Alternator Current Output</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect the ECM harness connectors.</para><?Pub _newline?><para>2. Partially discharge the batteries by cranking the engine for 30 seconds or turning on the lights for about 10 minutes without starting the engine.</para><?Pub _newline?><para>3. Turn the disconnect switch and the key start switch to the <position>OFF</position> position.</para><?Pub _newline?><para>4. Connect multimeter probes between the alternator "B" terminal and the alternator case.</para><?Pub _newline?><para>5. Connect a clamp-on Ammeter Tool Group or an equivalent ammeter around the output wire.</para><?Pub _newline?><para>6. Turn the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>7. Start the engine and run the engine at approximately half throttle.</para><?Pub _newline?><para>8. Immediately check the alternator output current.</para></entry>
            <entry><para>The alternator output current at half throttle is approximately half the alternator full current output rating, and is stable.</para><!--Author needs to provide the specified current rating for the alternator.--></entry>
            <entry><para><emphasis>Result:</emphasis> The alternator output current at half throttle is approximately half the alternator full current output rating, and is stable. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Alternator Voltage Output</label> Table <xref format="dita" href="#i08790099/i08790099.14" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The output current of the alternator at half throttle is not stable. There is a large variation in the currents. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Refer to <pubref><pubtype>Service Manual</pubtype><media><formno>SENR4130</formno></media></pubref> for brushless alternators for further testing and repair procedures. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790099/i08790099.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.14" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.05*"/>
            <colspec colname="col2" colwidth="47.41*"/>
            <colspec colname="col3" colwidth="148.66*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Alternator Voltage Output</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The multimeter and the ammeter are still connected.</para><?Pub _newline?><para>2. Run the engine for approximately 10 minutes at half throttle.</para><?Pub _newline?><para>3. Check the alternator voltage at terminal "B".</para></entry>
            <entry><para>The voltage is within range of system voltage. There is little or no variation in the voltage.</para><?Pub _newline?><!--Author needs to provide the applicable voltage for the machine's system. Remove the one that is not needed.--><para>14 &#xb1; 1 V for 12 V system.</para><?Pub _newline?><para>28 &#xb1; 1 V for 24 V system.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The voltage is within range of system voltage and is stable. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790099/i08790099.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage is not stable. There is a large voltage variation. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Refer to <pubref><pubtype>Service Manual</pubtype><media><formno>SENR4130</formno></media></pubref> for brushless alternators for further testing and repair procedures. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790099/i08790099.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.15" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.05*"/>
            <colspec colname="col2" colwidth="47.41*"/>
            <colspec colname="col3" colwidth="148.66*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790099.16">
            <title>FMI 3</title>
            <table frame="all" id="i08790099.17" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="117.86*"/>
            <colspec colname="col2" colwidth="47.34*"/>
            <colspec colname="col3" colwidth="148.42*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check System Voltage At The ECM</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the disconnect switch and the key start switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. At the J1 harness connector for the ECM, insert a multimeter probe along the power supply. Use the other multimeter probe to make contact to frame ground.</para><?Pub _newline?><para>3. Turn the disconnect switch to the <position>ON</position> position. Start the engine and run at half throttle.</para><?Pub _newline?><para>4. Measure the voltage between the power supply contact and frame ground.</para><?Pub _newline?><para>5. Measure the voltage between the power supply contact and the (-) battery contact at the ECM harness connector.</para></entry>
            <entry><para>Both voltages are approximately the same and are within range of the system voltage.</para><!--Author needs to provide the applicable voltage for the machine's system. Remove the one that is not needed.--><?Pub _newline?><para>14 &#xb1; 1 V for 12 V system.</para><?Pub _newline?><para>28 &#xb1; 1 V for 24 V system.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each voltage is approximately the same and is within range of the system voltage. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790099/i08790099.22" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltages are approximately the same, however the voltages are unstable. There is a large variation in the voltages. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Alternator Current Output</label> Table <xref format="dita" href="#i08790099/i08790099.20" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The positive battery contact to frame ground measurement is stable and within range of the system voltage. However, the measurement between the ECM positive battery contact and the ECM negative battery contact is not always in the correct range. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Ground Circuits</label> Table <xref format="dita" href="#i08790099/i08790099.18" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.18" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.03*"/>
            <colspec colname="col2" colwidth="47.00*"/>
            <colspec colname="col3" colwidth="148.59*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Ground Circuits</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the J1 harness connector from the ECM.</para><?Pub _newline?><para>3. At the J1 harness connector for the ECM, measure the resistance between each of the negative battery contacts and frame ground. The contacts for the negative battery connections are illustrated in the diagram at the beginning of this procedure.</para></entry>
            <entry><para>Each resistance is less than 5.0 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each resistance is less than 5.0 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Supply Circuits</label> Table <xref format="dita" href="#i08790099/i08790099.19" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A resistance is greater than 5000 ohms. There is an open circuit or a poor connection in the ground circuit. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The open or poor connection is in the ground circuit. Check all the connectors and splice points that are in the ground circuit. Ensure that all connections are clean, secure, and in good condition. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>.Table <xref format="dita" href="#i08790099/i08790099.22" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.19" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.19*"/>
            <colspec colname="col2" colwidth="46.99*"/>
            <colspec colname="col3" colwidth="148.42*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Supply Circuits</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and disconnect switch remain <position>OFF</position>. The ECM harness connector remains disconnected.</para><?Pub _newline?><para>2. At the J1 harness connector for the ECM measure the resistance between the alternator <label>B</label> terminal and each of the positive battery contacts of the J1 harness. The contacts for the five positive battery connections are illustrated in the diagram at the beginning of this procedure.</para></entry>
            <entry><para>Each resistance is less than 5.0 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each resistance is less than 5.0 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>.Table <xref format="dita" href="#i08790099/i08790099.22" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A resistance is greater than 5000 ohms. There is an open circuit or a poor connection in the supply circuit. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The open or poor connection is in the ground circuit. Check all the connectors and splice points that are in the ground circuit. Ensure that all connections are clean, secure, and in good condition. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>.Table <xref format="dita" href="#i08790099/i08790099.22" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.20" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.03*"/>
            <colspec colname="col2" colwidth="47.34*"/>
            <colspec colname="col3" colwidth="148.26*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Alternator Current Output</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect the ECM harness connectors.</para><?Pub _newline?><para>2. Partially discharge the batteries by cranking the engine for 30 seconds or turning on the lights for about 10 minutes without starting the engine.</para><?Pub _newline?><para>3. Turn the disconnect switch and the key start switch to the <position>OFF</position> position.</para><?Pub _newline?><para>4. Connect multimeter probes between the alternator "B" terminal and the alternator case.</para><?Pub _newline?><para>5. Connect a clamp-on ammeter tool group or an equivalent ammeter around the output wire.</para><?Pub _newline?><para>6. Turn the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>7. Start the engine and run the engine at approximately half throttle.</para><?Pub _newline?><para>8. Immediately check the alternator output current.</para></entry>
            <entry><para>The alternator output current at half throttle is approximately half the alternator full current output rating, and is stable.</para><!--Author needs to provide the specified current rating for the alternator.--></entry>
            <entry><para><emphasis>Result:</emphasis> The alternator output current at half throttle is approximately half the alternator full current output rating, and is stable. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Alternator Voltage Output</label> <xref format="dita" href="#i08790099/i08790099.21" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The output current of the alternator at half throttle is not stable. There is a large variation in the currents. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Refer to <pubref><pubtype>Service Manual</pubtype><media><formno>SENR4130</formno></media></pubref> for brushless alternators for further testing and repair procedures. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>.Table <xref format="dita" href="#i08790099/i08790099.22" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.21" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.03*"/>
            <colspec colname="col2" colwidth="47.51*"/>
            <colspec colname="col3" colwidth="148.09*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Alternator Voltage Output</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The multimeter and the ammeter are still connected.</para><?Pub _newline?><para>2. Run the engine for approximately 10 minutes at half throttle.</para><?Pub _newline?><para>3. Check the alternator voltage at terminal "B".</para></entry>
            <entry><para>The voltage is within range of system voltage. There is little or no variation in the voltage.</para><!--Author needs to provide the applicable voltage for the machine's system. Remove the one that is not needed.--><?Pub _newline?><para>14 &#xb1; 1 V for 12 V system.</para><?Pub _newline?><para>28 &#xb1; 1 V for 24 V system.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The voltage is within range of system voltage and is stable. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>.Table <xref format="dita" href="#i08790099/i08790099.22" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage is not stable. There is a large voltage variation. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Refer to <pubref><pubtype>Service Manual</pubtype><media><formno>SENR4130</formno></media></pubref> for brushless alternators for further testing and repair procedures. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>.Table <xref format="dita" href="#i08790099/i08790099.22" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.22" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.03*"/>
            <colspec colname="col2" colwidth="47.34*"/>
            <colspec colname="col3" colwidth="148.26*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>
            <sect id="i08790099.23">
            <title>FMI 4</title>
            <table frame="all" id="i08790099.24" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="118.38*"/>
            <colspec colname="col2" colwidth="47.07*"/>
            <colspec colname="col3" colwidth="148.65*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Battery Voltage</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Start the engine and run the engine at high idle for several minutes.</para><?Pub _newline?><para>2. Measure the voltage of the battery at the battery posts.</para></entry>
            <entry><para>The voltage is within range of system voltage.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The voltage is within range of system voltage. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The System Voltage At The ECM</label> Table <xref format="dita" href="#i08790099/i08790099.25" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage is not within the range of system voltage.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0354</formno></media></pubref>. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790099/i08790099.26" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.25" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.04*"/>
            <colspec colname="col2" colwidth="47.07*"/>
            <colspec colname="col3" colwidth="148.99*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The System Voltage At The ECM</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The engine remains running at high idle.</para><?Pub _newline?><para>2. Do not disconnect the machine harness from the ECM.</para><?Pub _newline?><para>3. Use the Multimeter Probe to measure the voltage between the supply contacts and ground contacts.</para></entry>
            <entry><para>The voltage is within range of system voltage.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The voltage is within range of system voltage. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790099/i08790099.26" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage is not correct. The machine harness has failed. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790099/i08790099.26" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790099.26" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.21*"/>
            <colspec colname="col2" colwidth="47.40*"/>
            <colspec colname="col3" colwidth="148.47*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
        </sect>`
          ]
          const genInfo = `<sect id="i08790099.1">
          <title>General Information</title>
          <para>The electrical power supply connections are the connections between the alternator and battery that power the electronic control modules (ECMs).</para>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the electrical power supply for the ECM. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The diagram or diagrams below are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
      </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790099.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i08790099.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC1" colwidth="63.08*"/>
            <colspec colname="col2" colwidth="70.29*"/>
            <colspec colname="col3" colwidth="188.59*"/>
            <colspec colname="COLSPEC0" colwidth="158.79*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>J1939</para></entry>
            <entry align="center"><para>CDL</para></entry>
            <entry align="center"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para><code>####-2</code></para></entry>
            <entry align="center"><para><code>####-2</code></para></entry>
            <entry><para><codedesc>####: Erratic, Intermittent, or Incorrect</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry><para><codedesc>####: Voltage Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><para><code>####-4</code></para></entry>
            <entry align="center"><para><code>####-4</code></para></entry>
            <entry><para><codedesc>####: Voltage Below Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure id="i08790099.4">
            <graphic controlno="g03638176" href="x-wc://file=g03638176.cnv"/>
            <caption>
            <para>#### ECM Power Supply Connections</para>
            </caption>
            </figure>
        </sect>`;
          }
      
          let dtc = `<sect id="i08790099.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790099.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. Ensure that the Charging System is functioning properly. Check the wiring harness for pinch points or abrasions. Look for and repair areas that indicate wires are exposed. If a problem with a connection is found, correct the problem and verify that the diagnostic trouble code is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i08790099.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790099.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script7() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
            `<randitem>FMI <code>2</code> DTC, proceed to Table <xref href="#i08790100/i08790100.8" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i08790100.8">
            <title>FMI 2</title>
            <table frame="all" id="i08790100.9" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="42.69*"/>
            <colspec colname="col2" colwidth="21.81*"/>
            <colspec colname="col3" colwidth="42.25*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Verify The Configuration Of The Sales Model</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="top"><para>Values</para></entry>
            <entry align="center" valign="top"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry colname="col1"><para>1. Use the <trademark>Cat</trademark><?Pub _font?><supscrpt>&#xae;</supscrpt><?Pub /_font?> Electronic Technician (ET) Service Tool to verify that the ECM is configured to the default setting configuration.</para></entry>
            <entry colname="col2"><para>The ECM has been configured correctly to the default setting configuration.</para></entry>
            <entry colname="col3"><para><emphasis>Result:</emphasis> The ECM has been configured correctly to the default setting configuration. <?Pub _newline?><?Pub _newline?>Verify that the new configuration has corrected the problem before attempting to operate the machine. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Code Remains</label> Table <xref format="dita" href="#i08790100/i08790100.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The ECM does not have the appropriate sales model and product identification. <?Pub _newline?><?Pub _newline?>Proceed to <label>Configure The ECM</label> Table <xref format="dita" href="#i08790100/i08790100.10" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790100.10" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="42.69*"/>
            <colspec colname="col2" colwidth="21.82*"/>
            <colspec colname="col3" colwidth="42.26*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Configure The ECM</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="top"><para>Values</para></entry>
            <entry align="center" valign="top"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Use <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> ET to reset the configuration to the default setting configuration. Enter the correct information for sales model and product identification.</para><?Pub _newline?><para>2. Reset the installation status to the correct type for the attachments that are installed on the machine.</para></entry>
            <entry><para>The ECM is configured to the default setting configuration.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The ECM is configured to the default setting configuration. <?Pub _newline?><?Pub _newline?>Verify that the new configuration has corrected the problem before attempting to operate the machine. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790100/i08790100.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The ECM is not configured to the default setting configuration.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repeat this procedure. <?Pub _newline?><?Pub _newline?>If the DTC remains active or repeatedly activated and no cause can be found, flash the ECM with the latest software version. Ensure that the latest software version for the specific machine and ECM is used. Refer to the <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM Software - Install</pubtitle></ie-topic></pubref> section of this manual for the correct procedure. <?Pub _newline?><?Pub _newline?>If the problem is still present after flashing the latest software to the ECM, contact the Technical Communicator at the dealership for a possible consultation with <trademark>Caterpillar</trademark>. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790100/i08790100.11" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790100.11" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="42.62*"/>
            <colspec colname="col2" colwidth="21.59*"/>
            <colspec colname="col3" colwidth="42.54*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="top"><para>Values</para></entry>
            <entry align="center" valign="top"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>2. Clear all DTCs.</para><?Pub _newline?><para>3. Operate the machine.</para><?Pub _newline?><para>4. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>5. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>. <?Pub _newline?><?Pub _newline?><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i08790100.1">
          <title>General Information</title>
          <para>The programming parameters identify conditions related to the programming of the electronic control module (ECM) or a signal failure. A failure of the internal program of the ECM is associated with this Diagnostic Trouble Code (DTC) as well. The fault messages displayed in <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET) Service Tool or via the operator monitor include <label>programmed parameter fault</label> or other machine monitoring failures.</para>
          <note><para>The correct sales model and product identification must be programmed when new software is flashed to the ECM.</para></note>
          <para>All machine attachments are configured in the ECM. The ECM activates DTC <code>268-2</code> when an attachment is configured incorrectly.</para>
          <para>The following table or tables are a list of DTCs that are associated with the configuration parameters of the (ECM). Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The diagram or diagrams below are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790100.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i08790100.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC2" colwidth="15.00*"/>
            <colspec colname="col1" colwidth="15*"/>
            <colspec colname="col2" colwidth="42*"/>
            <colspec colname="col3" colwidth="42*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="COLSPEC2" valign="top"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>J1939</para></entry>
            <entry align="center" valign="top"><para>CDL</para></entry>
            <entry align="center" valign="top"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center" valign="top"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para>-</para></entry>
            <entry align="center" colname="col1"><para><code>268-2</code></para></entry>
            <entry colname="col2"><para><codedesc>Programmed Parameter Fault: Data erratic, intermittent, or incorrect</codedesc></para></entry>
            <entry colname="col3"><para>The ECM has determined that a configuration parameter is not programmed. The ECM will display the parameter causing the problem on the <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET) service tool.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`;
          }
      
          let dtc = `<sect id="i08790100.4">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790100.5" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <steplist>
          <step id="i08790100.6">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790100.7">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      }
      function script8() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
            `<randitem>FMI <code>3</code> , proceed to <xref format="dita" href="#i09807020/i09807020.9" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>5</code> , proceed to <xref format="dita" href="#i09807020/i09807020.12" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>6</code> , proceed to <xref format="dita" href="#i09807020/i09807020.16" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i09807020.9">
            <title>FMI 3</title>
            <table frame="all" id="i09807020.10" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="129.73*"/>
            <colspec colname="col2" colwidth="52.87*"/>
            <colspec colname="col3" colwidth="162.29*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check The Machine Harness For A Short</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry colname="col1"><?Pub _cellfont Weight="medium"?><para>1. Turn the key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the relay from the harness.</para><?Pub _newline?><para>3. Disconnect the ECM machine harness connectors.</para><?Pub _newline?><para>4. At the ECM machine harness connector, measure the resistance between the signal contact and all other contacts that are used in the ECM.</para></entry>
            <entry colname="col2"><para>Each resistance measurement is greater than 5000 ohms.</para></entry>
            <entry colname="col3"><para><emphasis>Result:</emphasis> All resistance measurements are greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i09807020/i09807020.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more readings are less than 5 ohms. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> A short exists between the signal contact and the circuit with the low resistance. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or corroded connection in the circuit. A resistance measurement greater than 5000 ohms indicates an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i09807020/i09807020.11" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i09807020.11" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="129.61*"/>
            <colspec colname="col2" colwidth="51.69*"/>
            <colspec colname="col3" colwidth="163.60*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i09807020.12">
            <title>FMI 5</title>
            <table frame="all" id="i09807020.13" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="129.61*"/>
            <colspec colname="col2" colwidth="51.87*"/>
            <colspec colname="col3" colwidth="163.41*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check The Relay</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the relay from the wiring harness.</para><?Pub _newline?><para>3. At the machine harness connector for the relay, place a jumper wire between the signal wire and the signal return.</para><?Pub _newline?><para>4. Turn the key start switch and the disconnect switch to the <position>ON</position> position. Do not start the engine.</para><?Pub _newline?><para>5. Observe the status of the DTC.</para></entry>
            <entry><para>The DTC changes from an FMI <code>5</code> to an FMI <code>6</code> after the jumper wire is installed.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The harness is correct. The DTC changes from an FMI <code>5</code> to an FMI <code>6</code> after the jumper wire is installed. The relay has failed. <?Pub _newline?><?Pub _newline?><emphasis>Repair -</emphasis> Replace the relay. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> <xref format="dita" href="#i09807020/i09807020.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC remains active. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Harness For An Open</label> Table <xref format="dita" href="#i09807020/i09807020.14" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i09807020.14" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="129.80*"/>
            <colspec colname="col2" colwidth="51.68*"/>
            <colspec colname="col3" colwidth="163.41*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check The Harness For An Open</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the machine harness connectors from the ECM.</para><?Pub _newline?><para>3. The jumper wire remains installed.</para><?Pub _newline?><para>4. At the ECM machine harness connector, measure the resistance between the signal contact and the return contact.</para></entry>
            <entry><para>The resistance is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance is less than 5 ohms. The machine harness is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> <xref format="dita" href="#i09807020/i09807020.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance is greater than 5 ohms. The resistance measurement is not correct. There is an open circuit in the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> <xref format="dita" href="#i09807020/i09807020.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i09807020.15" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="129.98*"/>
            <colspec colname="col2" colwidth="51.50*"/>
            <colspec colname="col3" colwidth="163.41*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i09807020.16">
            <title>FMI 6</title>
            <table frame="all" id="i09807020.17" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="129.48*"/>
            <colspec colname="col2" colwidth="51.43*"/>
            <colspec colname="col3" colwidth="163.44*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check The Relay</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>2. Observe the status of the DTC.</para><?Pub _newline?><para>3. Disconnect the relay from the machine harness.</para></entry>
            <entry><para>The FMI <code>6</code> changes to FMI <code>5</code> when the relay is disconnected.</para></entry>
            <entry><para><emphasis>Result:</emphasis> FMI <code>6</code> changes to FMI <code>5</code> when the relay is disconnected. The harness is correct. The relay has failed. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the relay. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i09807020/i09807020.19" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC remains active. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Return Circuit For A Short To Ground</label> Table <xref format="dita" href="#i09807020/i09807020.18" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i09807020.18" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="129.78*"/>
            <colspec colname="col2" colwidth="51.60*"/>
            <colspec colname="col3" colwidth="162.97*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check The Return Circuit For A Short To Ground</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn key switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. The relay remains disconnected from the machine harness.</para><?Pub _newline?><para>3. Disconnect the machine harness connectors from the ECM.</para><?Pub _newline?><para>4. At the ECM machine harness connector, measure the resistance between the signal contact and all other contacts that are used in the ECM.</para><?Pub _newline?></entry>
            <entry><para>Each resistance measurement is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each resistance measurement is greater than 5000 ohms. The machine harness is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i09807020/i09807020.19" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> Each resistance measurement is not greater than 5000 ohms. A short circuit exists between the signal circuit and the circuit with the low-resistance measurement. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or corroded connection in the circuit. A resistance measurement greater than 5000 ohms indicates an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i09807020/i09807020.19" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i09807020.19" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="129.60*"/>
            <colspec colname="col2" colwidth="51.97*"/>
            <colspec colname="col3" colwidth="162.79*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i09807020.1">
          <title>General Information</title>
          <para>A relay is a component that uses a small amount of electrical current to control the state of a circuit. The circuit is either opened or closed.</para>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the relays of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The diagram or diagrams below are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i09807020.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i09807020.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC1" colwidth="57.66*"/>
            <colspec colname="col2" colwidth="61.92*"/>
            <colspec colname="col3" colwidth="188.56*"/>
            <colspec colname="COLSPEC0" colwidth="188.87*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1" valign="top"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>J1939</para></entry>
            <entry align="center" valign="top"><para>CDL</para></entry>
            <entry align="center" valign="top"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center" valign="top"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center" valign="middle"><para><code>####-3</code></para></entry>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry><para><codedesc>####: Voltage Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para><code>####-5</code></para></entry>
            <entry align="center"><para><code>####-5</code></para></entry>
            <entry><para><codedesc>####: Current Below Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para><code>####-6</code></para></entry>
            <entry align="center"><para><code>####-6</code></para></entry>
            <entry><para><codedesc>####: Current Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure figure-style="page-wide" id="i09807020.4">
            <graphic controlno="g03640676" href="x-wc://file=g03640676.cnv"/>
            <caption>
            <para>Schematic of the Relay Circuits</para>
            </caption>
            </figure>
            </sect>`;
          }
      
          let dtc = `<sect id="i09807020.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i09807020.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. Check the wiring harness for pinch points or abrasions. Look for and repair areas that indicate wires are exposed. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i09807020.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i09807020.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      }  
      function script9() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
              `<randitem>FMI <code>2</code>, proceed to <xref href="#i08790102/i08790102.9" scope="local" type="sect"></xref></randitem>`,
              `<randitem>FMI <code>9</code>, proceed to <xref href="#i08790102/i08790102.14" scope="local" type="sect"></xref></randitem>`,
              `<randitem>FMI <code>13</code>, proceed to <xref href="#i08790102/i08790102.28" scope="local" type="sect"></xref></randitem>`
          ];
          const FMI = [
            `<sect id="i08790102.9">
            <title>FMI 2</title>
            <table frame="all" id="i08790102.10" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="131.13*"/>
            <colspec colname="col2" colwidth="55.31*"/>
            <colspec colname="col3" colwidth="130.43*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Inspect The Harness Connections</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn key start switch and disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Inspect all harness connections related to the <trademark>CAN</trademark> data link. Make sure that the connectors are clean and tight.</para><?Pub _newline?><para>3. Check the connectors for proper mating. Ensure that all the seals are present and in place.</para><?Pub _newline?><para>4. Check the harness for signs of damage or abrasion.</para><?Pub _newline?><para>5. Check the wires at the connector. Ensure that the wires are secured tightly into the connector. <emphasis>Take care not to pull the wire out of the connector.</emphasis></para><?Pub _newline?><para>6. Check the exposed wires at the connectors for nicks or signs of abrasion.</para><?Pub _newline?><para>7. Check for moisture inside the connector.</para></entry>
            <entry><para>The machine harness connectors are tight and free of corrosion.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The machine harness connectors are tight and free of corrosion. <?Pub _newline?><?Pub _newline?>Proceed to <label>Verify The Hardware And The Software Part Numbers</label> Table <xref format="dita" href="#i08790102/i08790102.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The machine harness connectors are in need of repair. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.13" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.11" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="130.99*"/>
            <colspec colname="col2" colwidth="55.61*"/>
            <colspec colname="col3" colwidth="130.27*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Verify The Hardware And The Software Part Numbers</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium" AllCap="no"?><para>1. Verify that the following information is correct:</para><?Pub _newline?><para>The part number of the flash software for the ECM is correct.</para><para>The part number of the ECM is correct.</para><para>The part numbers of the sensors are correct.</para><fn id="i08790102.12" outputclass="1">
            <para>Consult the Caterpillar Authorized Dealer for the correct part numbers of the flash software.</para>
            </fn></entry>
            <entry><para>All the part numbers are correct.</para></entry>
            <entry><para><emphasis>Result:</emphasis> All the part numbers are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> All the part numbers are not correct. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The ECM or the sensors have the wrong part number or incorrect flash software is installed. Flash the correct software or replace the incorrect ECM or the sensor with a module that has the correct part number. Refer to the <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Flash Program</pubtitle></ie-topic></pubref> section for additional information. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.13" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.13" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="130.97*"/>
            <colspec colname="col2" colwidth="55.63*"/>
            <colspec colname="col3" colwidth="130.27*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>2. Clear all DTCs.</para><?Pub _newline?><para>3. Operate the machine.</para><?Pub _newline?><para>4. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>5. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790102.14">
            <title id="i08790102.35">FMI 9</title>
            <table frame="all" id="i08790102.15" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="130.98*"/>
            <colspec colname="col2" colwidth="55.79*"/>
            <colspec colname="col3" colwidth="130.11*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Verify The Hardware And The Software Part Numbers</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium" AllCap="no"?><para>1. Verify that the following information is correct:</para><?Pub _newline?><para>The part number of the flash software for the ECM is correct.</para><para>The part number of the ECM is correct.</para><para>The part numbers of the sensors are correct.</para><fn id="i08790102.16" outputclass="1">
            <para>Consult the Caterpillar Authorized Dealer for the correct part numbers of the flash software.</para>
            </fn></entry>
            <entry><para>All the part numbers are correct.</para></entry>
            <entry><para><emphasis>Result:</emphasis> All the part numbers are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check Voltage At The Sensor</label> Table <xref format="dita" href="#i08790102/i08790102.17" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> All the part numbers are not correct. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The ECM or the sensors have the wrong part number or incorrect flash software is installed. Flash the correct software or replace the incorrect ECM or the sensor with a module that has the correct part number. Refer to the <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Flash Program</pubtitle></ie-topic></pubref> section for additional information. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.27" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.17" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="130.98*"/>
            <colspec colname="col2" colwidth="55.81*"/>
            <colspec colname="col3" colwidth="130.12*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check Voltage At The Sensor</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium" AllCap="no"?><para>1. Turn the key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. At the machine harness connector for the sensor, insert a Multimeter Probe along the contact for the sensor power supply. Attach the other probe to frame ground.</para><?Pub _newline?><para>3. Turn the disconnect switch and key start switch to the <position>ON</position> position.</para><?Pub _newline?><para>4. Measure the voltage at the sensor between the power supply contact and frame ground.</para></entry>
            <entry><para>The voltage measured is battery voltage.</para></entry>
            <entry><para><emphasis>Result:</emphasis> - The voltage is between 18 VDC and 32 VDC. The sensor is receiving the correct voltage. <?Pub _newline?><?Pub _newline?>Proceed to <label>Inspect The Harness Connections</label> Table <xref format="dita" href="#i08790102/i08790102.20" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> - The voltage reading is not battery voltage. There is a problem with the machine harness or fuse powering the sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Ground Circuit For An Open</label> Table<xref format="dita" href="#i08790102/i08790102.18" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.18" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="130.98*"/>
            <colspec colname="col2" colwidth="55.97*"/>
            <colspec colname="col3" colwidth="129.94*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Ground Circuit For An Open</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium" AllCap="no"?><para>1. Turn the key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the sensor from the machine harness. Disconnect the ECM harness connectors.</para><?Pub _newline?><para>3. At the machine harness connector for the sensor, measure the resistance between the return contact and frame ground.</para></entry>
            <entry><para>The reading is less than 5 ohms when connected to frame ground.</para><para><fn id="i08790102.19" outputclass="2">
            <para>The resistance reading through an ECM may be higher than 5 ohms.</para>
            </fn></para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance measurement is less than 5 ohms. The ground circuit is correct.<?Pub _newline?>.<?Pub _newline?>Proceed to <label>Inspect The Harness Connections</label> Table <xref format="dita" href="#i08790102/i08790102.20" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance measurement is greater than 5 ohms. There is a problem with the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or corroded connection in the circuit. A resistance measurement greater than 5000 ohms indicates an open in the circuit.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.27" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.20" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="130.98*"/>
            <colspec colname="col2" colwidth="56.14*"/>
            <colspec colname="col3" colwidth="129.76*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Inspect The Harness Connections</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn key start switch and disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Inspect all harness connections related to the <trademark>CAN</trademark> data link. Make sure that the connectors are clean and tight.</para><?Pub _newline?><para>3. Check the connectors for proper mating. Ensure that all the seals are present and in place.</para><?Pub _newline?><para>4. Check the harness for signs of damage or abrasion.</para><?Pub _newline?><para>5. Check the wires at the connector. Ensure that the wires are secured tightly into the connector. <emphasis>Take care not to pull the wire out of the connector.</emphasis></para><?Pub _newline?><para>6. Check the exposed wires at the connectors for nicks or signs of abrasion.</para><?Pub _newline?><para>7. Check for moisture inside the connector.</para></entry>
            <entry><para>The machine harness connectors are tight and free of corrosion.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The machine harness connectors are tight and free of corrosion. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Voltage Of The Data Link</label> Table <xref format="dita" href="#i08790102/i08790102.21" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The machine harness connectors are in need of repair. <?Pub _newline?><?Pub _newline?><emphasis>Result:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table<xref format="dita" href="#i08790102/i08790102.27" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.21" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="130.98*"/>
            <colspec colname="col2" colwidth="56.14*"/>
            <colspec colname="col3" colwidth="129.76*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Voltage Of The Data Link</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para><emphasis>5. Check The Voltage Of The Data Link</emphasis></para><?Pub _newline?><para>1. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>2. Connect <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET) Service Tool and verify which ECMs have logged communication diagnostics. At each ECM or device that is not communicating, use an electrical spoon to measure the voltage. One at a time, measure the voltage of the CAN data link wires to frame ground.</para></entry>
            <entry><para>The reading is 0.5V to 4.5V on each wire.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The voltages of the wires for the data links are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Terminating Resistors</label> Table<xref format="dita" href="#i08790102/i08790102.24" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage is greater than 4.5 V. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check For A Short To +Battery Circuit In The Data Link</label> Table<xref format="dita" href="#i08790102/i08790102.25" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage is less than 0.5 V. <?Pub _newline?><?Pub _newline?>Proceed to Test Step <label>Check For Short To Ground In the Data Link</label> Table <xref format="dita" href="#i08790102/i08790102.22" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.22" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="130.98*"/>
            <colspec colname="col2" colwidth="56.14*"/>
            <colspec colname="col3" colwidth="129.76*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For Short To Ground In the Data Link</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. The key start switch and disconnect switch remain <position>OFF</position>.</para><?Pub _newline?><para>2. Disconnect the machine harness connectors from all electronic control modules that use the suspect <trademark>CAN</trademark> data link.</para><?Pub _newline?><para>3. At the machine harness for the Machine ECM, measure the resistance between frame ground and the positive <propname>CAN</propname> connector contact of the circuit.</para><?Pub _newline?><para>4. At the machine harness for the Machine ECM, measure the resistance between frame ground and the negative <propname>CAN</propname> connector contact of the circuit.</para></entry>
            <entry><para>The reading is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The harness circuit resistance is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check For A Short Between The Data Link Wires</label> Table<xref format="dita" href="#i08790102/i08790102.23" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A reading is less than 5 ohms. The machine harness has failed. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> There is a short between frame ground and the contacts of the <propname>CAN</propname> data link circuit in the machine harness. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table<xref format="dita" href="#i08790102/i08790102.27" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.23" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="130.98*"/>
            <colspec colname="col2" colwidth="56.14*"/>
            <colspec colname="col3" colwidth="129.76*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For A Short Between The Data Link Wires</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. The key start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the terminating resistors if the resistors are a part of the circuit.</para><?Pub _newline?><para>3. Measure the continuity between the data link wires.</para></entry>
            <entry><para>The reading is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance measurement is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Terminating Resistors</label> Table<xref format="dita" href="#i08790102/i08790102.24" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance measurement is not correct. The wires for the data link are shorted together. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair the machine harness or replace the harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.27" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.24" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="131.19*"/>
            <colspec colname="col2" colwidth="55.93*"/>
            <colspec colname="col3" colwidth="129.76*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Terminating Resistors</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. The key start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. The terminating resistors remain disconnected.</para><?Pub _newline?><para>3. Check the terminating resistor connectors for the following:</para><?Pub _newline?><para>Moisture</para><para>Corrosion</para><para>Damaged Terminals</para><para>Loose Connections</para><?Pub _newline?><para>4. Measure the resistance between terminal A and B of each terminating resistor that was removed from the CAN circuit.</para></entry>
            <entry><para>The reading is approx. 120 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Both resistance measurements are approximately 120 ohms. The terminating resistors have not failed. Reinstall the terminating resistors. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check For A Short To +Battery Circuit In The Data Link</label> Table <xref format="dita" href="#i08790102/i08790102.25" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or both resistance measurements are not approximately 120 ohms. At least one of the resistors is not functioning properly. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the terminating resistor or resistors that have failed. Reinstall the terminating resistor that has not failed. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.27" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.25" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="131.19*"/>
            <colspec colname="col2" colwidth="55.93*"/>
            <colspec colname="col3" colwidth="129.77*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For A Short To +Battery Circuit In The Data Link</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and disconnect switch are <position>OFF</position>.</para><?Pub _newline?><para>2. All related modules remain disconnected from the machine harness.</para><?Pub _newline?><para>3. At the machine harness connector for the Machine ECM, measure the resistance between the connector contact for the +Battery and the positive CAN connector contact.</para><?Pub _newline?><para>4. At the machine harness connector for the Machine ECM, measure the resistance between the connector contact for the +Battery and the negative CAN connector contact.</para></entry>
            <entry><para>The reading is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The harness circuit resistance is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Data Link For An Open</label> Table <xref format="dita" href="#i08790102/i08790102.26" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A reading is less than 5 ohms. The machine harness has failed. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> There is a short between the +battery circuit and one of the <propname>CAN</propname> data link circuits in the machine harness. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.27" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.26" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="131.19*"/>
            <colspec colname="col2" colwidth="55.93*"/>
            <colspec colname="col3" colwidth="129.77*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Data Link For An Open</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para><emphasis>Note:</emphasis> Two 120 Ohm resistors should be on the CAN Data Link. A resistance of 60 ohms should be found at any point on the data link.</para><?Pub _newline?><para>1. The key start switch and disconnect switch are <position>OFF</position>.</para><?Pub _newline?><para>2. Use an electrical spoon to connect to the back of the harness connector for each ECM that has communication issues.</para><?Pub _newline?><para>3. Measure the resistance across the CAN line at each connector to find the open wire.</para></entry>
            <entry><para>All resistance measurements are between 55 and 65 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance measurements are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.27" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> At least one resistance measurement is greater than 65 ohms. If the resistance is approximately 115 to 125 ohms. There is an open in the harness. <?Pub _newline?><?Pub _newline?>If the resistance measurement is 60 ohms, that connector does not have an open between either terminating resistor. If the resistance measurement is 120 ohms, there is an open at that connector, between one of the terminating resistors. If the resistance is greater than 5000 ohms, there is an open between that connector and both terminating resistors. If there is a measurement of 40 ohms, there is an extra terminating resistor somewhere on the line. Once the section of harness containing the open is isolated, repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table<xref format="dita" href="#i08790102/i08790102.27" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> At least one resistance measurement is less than 55 ohms. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Look for the source of the short by disconnecting the terminating resistors and check the resistance again. If the resistance is still under 55 ohms, continue disconnecting ECMs and devices from the CAN circuit until the resistance goes up. If everything is disconnected from the CAN circuit, and the resistance still is less than 55 ohms the harness has failed. <?Pub _newline?><?Pub _newline?>Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.27" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.27" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="131.18*"/>
            <colspec colname="col2" colwidth="55.93*"/>
            <colspec colname="col3" colwidth="129.76*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return the machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790102.28">
            <title>FMI 13</title>
            <table frame="all" id="i08790102.29" pgwide="1" srtbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="131.28*"/>
            <colspec colname="col2" colwidth="55.97*"/>
            <colspec colname="col3" colwidth="129.86*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check the Calibration</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Perform the calibration procedure for the sensor. Refer to the calibration procedure in <pubref><pubtype>Testing and Adjusting</pubtype><media><formno>####</formno></media></pubref> for this machine.</para><?Pub _newline?><para>2. Observe the status of the DTC.</para></entry>
            <entry><para>The DTC is no longer active.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The FMI <code>13</code> is no longer active. The calibration corrected the condition that caused the DTC. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.30" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The FMI <code>13</code> DTC is active. The DTC has not been corrected. Verify that the correct software has been flashed into the ECM, or that the correct ECM is installed on the machine. Then repeat the calibration. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790102/i08790102.30" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790102.30" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="131.28*"/>
            <colspec colname="col2" colwidth="55.97*"/>
            <colspec colname="col3" colwidth="129.86*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>2. Clear all DTCs.</para><?Pub _newline?><para>3. Operate the machine.</para><?Pub _newline?><para>4. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>5. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i08790102.1">
          <title>General Information</title>
          <para>Each <propname>CAN</propname> data link circuit is an input and output of select electronic control modules (ECMs). The data link is designed to carry communications between the ECMs.</para>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the sensors on the <propname>CAN</propname> data link of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The diagram or diagrams below are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790102.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i08790102.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC1" colwidth="59.47*"/>
            <colspec colname="col2" colwidth="78.62*"/>
            <colspec colname="col3" colwidth="166.01*"/>
            <colspec colname="COLSPEC0" colwidth="153.69*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1" valign="middle"><?Pub _cellfont Weight="bold"?><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center"><para>J1939</para></entry>
            <entry align="center"><para>CDL</para></entry>
            <entry align="center"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para><code>####-2</code></para></entry>
            <entry align="center"><para><code>####-2</code></para></entry>
            <entry><para><codedesc>####: Data Erratic, Intermittent, or Incorrect</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><para><code>####-9</code></para></entry>
            <entry align="center"><para><code>####-9</code></para></entry>
            <entry><para><codedesc>####: Abnormal Update Rate</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><para><code>####-13</code></para></entry>
            <entry align="center" colname="col2"><para><code>####-13</code></para></entry>
            <entry colname="col3"><para><codedesc>####: Out of Calibration</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure figure-style="page-wide" id="i08790102.4">
            <graphic controlno="g03639859" href="x-wc://file=g03639859.cnv"/>
            <caption>
            <para>CAN Data Link Connections</para>
            <!--Each can circuit should have only 2 can resistors.-->
            </caption>
            </figure>
            </sect>`;
          }
      
          let dtc = `<sect id="i08790102.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790102.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. Check the wiring for pinch points or abrasions. Look for and repair areas that indicate wires are exposed. If a problem with a connection is found, correct the problem and verify that this DTC is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i08790102.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790102.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script10() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
            `<randitem>FMI <code>3</code>, proceed to <xref format="dita" href="#i08790103/i08790103.9" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>4</code>, proceed to <xref format="dita" href="#i08790103/i08790103.14" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i08790103.9">
            <title>FMI 3</title>
            <table id="i08790103.10" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colsep="1" colwidth="122.86*"/>
            <colspec colname="col2" colsep="1" colwidth="50.32*"/>
            <colspec colname="col3" colwidth="154.46*"/>
            <thead>
            <row rowsep="1">
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Voltage At The Sensor</para></entry>
            </row>
            <row rowsep="1">
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry colname="col1"><para>1. Turn key start switch and disconnect switch <position>ON</position>.</para><?Pub _newline?><para>2. Refer to the schematic to determine the voltage source for the sensor.</para><?Pub _newline?><para>3. At the machine harness connector for the sensor, insert multimeter probes along the sensor supply and sensor return.</para><?Pub _newline?><para>4. At the sensor harness connector, measure voltage between the sensor supply and sensor return.</para></entry>
            <entry colname="col2"><para>Voltage reading is correct for the sensor.</para></entry>
            <entry colname="col3"><para><emphasis>Result:</emphasis> The voltage reading is correct for the sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Harness For An Open</label> Table <xref format="dita" href="#i08790103/i08790103.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage is not correct for the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Harness For An Open</label> Table <xref format="dita" href="#i08790103/i08790103.11" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790103.11" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colsep="1" colwidth="122.86*"/>
            <colspec colname="col2" colsep="1" colwidth="50.32*"/>
            <colspec colname="col3" colwidth="154.46*"/>
            <thead>
            <row rowsep="1" valign="middle">
            <entry align="center" nameend="col3" namest="col1"><para>Check The Harness For An Open</para></entry>
            </row>
            <row rowsep="1" valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the machine harness connector from the sensor.</para><?Pub _newline?><para>3. At the sensor harness connector, install a jumper wire between the sensor return contact and signal contact.</para><?Pub _newline?><para>4. Turn the key switch and disconnect switch <position>ON</position>.</para><?Pub _newline?><para>5. Observe the status of the DTC.</para></entry>
            <entry><para>The DTC changes from an FMI <code>3</code> to an FMI <code>4</code>.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC changes from an FMI <code>3</code> to an FMI <code>4</code>. The sensor has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790103/i08790103.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC does not change from an FMI <code>3</code> to an FMI <code>4</code>. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check Signal Circuit For A Short To +Battery</label> Table <xref format="dita" href="#i08790103/i08790103.12" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790103.12" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colsep="1" colwidth="122.86*"/>
            <colspec colname="col2" colsep="1" colwidth="50.32*"/>
            <colspec colname="col3" colwidth="154.46*"/>
            <thead>
            <row rowsep="1" valign="middle">
            <entry align="center" nameend="col3" namest="col1"><para>Check Signal Circuit For A Short To +Battery</para></entry>
            </row>
            <row rowsep="1" valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the ECM harness connectors. The sensor harness connector remains disconnected.</para><?Pub _newline?><para>3. Remove the jumper wire that was installed in the previous test step.</para><?Pub _newline?><para>4. At the ECM harness connector, measure the resistance between the signal contact and all other +battery circuits used in the ECM harness connectors.</para></entry>
            <entry><para>Each resistance is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each resistance is greater than 5000 ohms. The harness circuit is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790103/i08790103.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance is less than 5 ohms. A short exists in the harness between the signal circuit and the circuit with the low-resistance measurement.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790103/i08790103.13" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790103.13" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colsep="1" colwidth="122.86*"/>
            <colspec colname="col2" colsep="1" colwidth="50.32*"/>
            <colspec colname="col3" colwidth="154.46*"/>
            <thead>
            <row rowsep="1" valign="middle">
            <entry align="center" nameend="col3" namest="col1"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row rowsep="1" valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTC.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP.</emphasis></para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time.</para><?Pub _newline?><para>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP.</emphasis></para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790103.14">
            <title>FMI 4</title>
            <table id="i08790103.15" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colsep="1" colwidth="122.61*"/>
            <colspec colname="col2" colsep="1" colwidth="50.82*"/>
            <colspec colname="col3" colwidth="154.21*"/>
            <thead>
            <row rowsep="1">
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Sensor</para></entry>
            </row>
            <row rowsep="1">
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the disconnect switch and the key start switch <position>ON</position>.</para><?Pub _newline?><para>2. Disconnect the sensor from the machine harness.</para><?Pub _newline?><para>3. Observe the status of the DTC as the sensor is disconnected from the harness.</para></entry>
            <entry><para>The DTC changes from an FMI <code>4</code> to an FMI <code>3</code> when the sensor is disconnected.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC changes from an FMI <code>4</code> to an FMI <code>3</code> when the sensor is disconnected. The sensor has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790103/i08790103.17" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The FMI <code>4</code> DTC remains active when sensor is disconnected. The sensor is not the cause of the problem. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal Circuit For A Short To Ground</label> Table <xref format="dita" href="#i08790103/i08790103.16" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790103.16" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colsep="1" colwidth="122.61*"/>
            <colspec colname="col2" colsep="1" colwidth="50.82*"/>
            <colspec colname="col3" colwidth="154.21*"/>
            <thead>
            <row rowsep="1" valign="middle">
            <entry align="center" nameend="col3" namest="col1"><para>Check The Signal Circuit For A Short To Ground</para></entry>
            </row>
            <row rowsep="1">
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Disconnect the harness connectors from the ECM.</para><?Pub _newline?><para>3. At the ECM harness connector, measure the resistance between the sensor signal contact and all other contacts used in the ECM harness connectors.</para></entry>
            <entry><para>The resistance is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance is greater than 5000 ohms. The harness circuit is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790103/i08790103.17" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance is less than 5 ohms. A short circuit exists between the signal circuit and the circuit with the low-resistance measurement.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790103/i08790103.17" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790103.17" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colsep="1" colwidth="122.61*"/>
            <colspec colname="col2" colsep="1" colwidth="50.82*"/>
            <colspec colname="col3" colwidth="154.21*"/>
            <thead>
            <row rowsep="1">
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row rowsep="1">
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by a poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP.</emphasis></para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP.</emphasis></para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i08790103.1">
          <title>General Information</title>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the active analog sensors of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each electronic control module (ECM) on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The diagram or diagrams below are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790103.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table id="i08790103.3" pgwide="1" srtbl="Y">
            <tgroup cols="4" colsep="1" rowsep="1">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC1" colsep="1" colwidth="85.00*"/>
            <colspec align="left" colname="col1" colsep="1" colwidth="85*"/>
            <colspec colname="col2" colsep="1" colwidth="252*"/>
            <colspec colname="COLSPEC0" colwidth="402*"/>
            <thead>
            <row rowsep="1">
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1"><?Pub _cellfont Weight="extrabold"?><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row rowsep="1">
            <entry align="center" valign="middle"><?Pub _cellfont Weight="extrabold"?><para>J1939</para></entry>
            <entry align="center" valign="middle"><?Pub _cellfont Weight="extrabold"?><?Pub _cellfont Weight="extrabold"?><para>CDL</para></entry>
            <entry align="center" valign="middle"><?Pub _cellfont Weight="extrabold"?><?Pub _cellfont Weight="extrabold"?><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center" valign="middle"><?Pub _cellfont Weight="extrabold"?><?Pub _cellfont Weight="extrabold"?><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row rowsep="1">
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry><para><codedesc>####: Voltage above normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><para><code>####-4</code></para></entry>
            <entry align="center"><para><code>####-4</code></para></entry>
            <entry><para><codedesc>####: Voltage below normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure id="i08790103.4">
            <graphic controlno="g03635817" href="x-wc://file=g03635817.cnv"/>
            <caption>
            <para>#### ECM Active Analog Connections</para>
            </caption>
            </figure>
            </sect>`;
          }
      
          let dtc = `<sect id="i08790103.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790103.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i08790103.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790103.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script11() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
            `<randitem>FMI <code>3</code>, proceed to <xref format="dita" href="#i08790104/i08790104.11" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>4</code>, proceed to <xref format="dita" href="#i08790104/i08790104.16" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i08790104.11">
            <title>FMI 3</title>
            <table frame="all" id="i08790104.12" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="45.31*"/>
            <colspec colname="col2" colwidth="18.69*"/>
            <colspec colname="col3" colwidth="57.08*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Sensor</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para><emphasis>Note:</emphasis> Refer to the tables above for a list of resistance values related to specific values.</para><?Pub _newline?><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the sensor from the harness.</para><?Pub _newline?><para>3. Measure the resistance between pin 1 and 2 of the sensor.</para></entry>
            <entry><para>The resistance reading agrees with the values from the table.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance readings agree with the values in the table. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check For An Open In The Sensor Circuit</label>, Table <xref format="dita" href="#i08790104/i08790104.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance readings do not agree with the values in the table.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790104/i08790104.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table frame="all" id="i08790104.13" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="45.31*"/>
            <colspec colname="col2" colwidth="18.69*"/>
            <colspec colname="col3" colwidth="57.08*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For An Open In The Sensor Circuit</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. The harness connector remains disconnected from the sensor.</para><?Pub _newline?><para>3. At the sensor harness connector, install a jumper wire across pins 1 and 2.</para><?Pub _newline?><para>4. Disconnect the J1 and J2 connectors from the ECM.</para><?Pub _newline?><para>5. At the ECM harness connector, measure the resistance between the signal and return contacts for the sensor.</para></entry>
            <entry><para>The resistance reading is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance is less than 5 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal Circuit For A Short</label>, Table <xref format="dita" href="#i08790104/i08790104.14" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance is greater than 5 ohms. The open is in the signal circuit or the return circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790104/i08790104.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table frame="all" id="i08790104.14" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="45.31*"/>
            <colspec colname="col2" colwidth="18.69*"/>
            <colspec colname="col3" colwidth="57.08*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Signal Circuit For A Short</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The disconnect switch and the key start switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. The harness connectors J1 and J2 remain disconnected from the ECM.</para><?Pub _newline?><para>3. Remove the jumper wire from the sensor harness connector.</para><?Pub _newline?><para>4. At the ECM harness connectors, measure the resistance between the signal circuit and all the other contacts that are used on the ECM.</para></entry>
            <entry><para>Each resistance reading is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each measurement is greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790104/i08790104.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A resistance measurement is less than 5 ohms. A short exists between the signal circuit and the circuit with the low-resistance measurement.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790104/i08790104.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790104.15" pgwide="y" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="132.07*"/>
            <colspec colname="col2" colwidth="54.09*"/>
            <colspec colname="col3" colwidth="166.04*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?PubTbl cell border-top-width="1.00pt"?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="top"><para>Values</para></entry>
            <entry align="center" valign="top"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The  DTC does not exist currently. The initial  DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790104.16">
            <title>FMI 4</title>
            <table frame="all" id="i08790104.17" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="44.10*"/>
            <colspec colname="col2" colwidth="18.08*"/>
            <colspec colname="col3" colwidth="55.50*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Sensor</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and disconnect switch <position>ON</position>.</para><?Pub _newline?><para>2. Ensure that the DTC is active.</para><?Pub _newline?><para>3. Disconnect sensor from machine harness.</para></entry>
            <entry><para>The DTC remains active.</para></entry>
            <entry><para><emphasis>Result:</emphasis> DTC remains active. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Wiring Harness Of The Sensor For A Short To Ground</label>, Table <xref format="dita" href="#i08790104/i08790104.18" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> DTC is no longer active. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790104/i08790104.19" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table frame="all" id="i08790104.18" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="44.10*"/>
            <colspec colname="col2" colwidth="18.08*"/>
            <colspec colname="col3" colwidth="55.50*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Wiring Harness Of The Sensor For A Short To Ground</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry colname="col1"><?Pub _cellfont Weight="medium"?><para>1. Turn the key start switch and the disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Disconnect the machine harness connector from the sensor.</para><?Pub _newline?><para>3. Disconnect the machine harness connectors from the ECM.</para><?Pub _newline?><para>4. At the ECM harness connectors, measure the resistance between the signal circuit and all the other contacts that are used on the ECM.</para></entry>
            <entry colname="col2"><para>Each reading greater than 5000 ohms.</para></entry>
            <entry colname="col3"><para><emphasis>Result:</emphasis> All resistance readings are greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label>, Table <xref format="dita" href="#i08790104/i08790104.19" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more of the readings are less than 5 ohms. A short exists between the signal contact and the circuit with the low resistance.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Code Remains</label>, Table <xref format="dita" href="#i08790104/i08790104.19" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790104.19" pgwide="y" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="132.07*"/>
            <colspec colname="col2" colwidth="54.09*"/>
            <colspec colname="col3" colwidth="166.04*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?PubTbl cell border-top-width="1.00pt"?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="top"><para>Values</para></entry>
            <entry align="center" valign="top"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i08790104.1">
          <title>General Information</title>
          <para>A passive analog sensor contains an internal resistor. The change in resistance of the internal circuit results in a change of voltage that is detected by the electronic control module (ECM).</para>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the passive (analog) circuits of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The diagram or diagrams below are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790104.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i08790104.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC1" colwidth="47.97*"/>
            <colspec align="center" colname="col2" colwidth="47.97*"/>
            <colspec colname="col3" colwidth="200.87*"/>
            <colspec colname="COLSPEC0" colwidth="168.45*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1" valign="top"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>J1939</para></entry>
            <entry valign="top"><para>CDL</para></entry>
            <entry align="center" valign="top"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center" valign="top"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry><para><code>####-3</code></para></entry>
            <entry><para><codedesc>####: Voltage Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><para><code>####-4</code></para></entry>
            <entry><para><code>####-4</code></para></entry>
            <entry><para><codedesc>####: Voltage Below Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure id="i08790104.4">
            <graphic controlno="g03641901" href="x-wc://file=g03641901.cnv"/>
            <caption>
            <para>Passive Analog Sensor Connections</para>
            </caption>
            </figure>
            <table frame="all" id="i08790104.5">
            <tgroup cols="2">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="29.81*"/>
            <colspec colname="col3" colwidth="29.19*"/>
            <tbody>
            <row>
            <entry align="center" colname="col1"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>Temperature</para></entry>
            <entry align="center" colname="col3"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>Resistance</para></entry>
            </row>
            <row>
            <entry align="center" colname="col1"><para><unitsgrp><metric>####</metric><english>####</english></unitsgrp></para></entry>
            <entry align="center" colname="col3"><para>####</para></entry>
            </row>
            <row>
            <entry align="center" colname="col1"><para><unitsgrp><metric>####</metric><english>####</english></unitsgrp></para></entry>
            <entry align="center" colname="col3"><para>####</para></entry>
            </row>
            <row>
            <entry align="center" colname="col1"><para><unitsgrp><metric>####</metric><english>####</english></unitsgrp></para></entry>
            <entry align="center" colname="col3"><para>####</para></entry>
            </row>
            <row>
            <entry align="center" colname="col1"><para><unitsgrp><metric>####</metric><english>####</english></unitsgrp></para></entry>
            <entry align="center" colname="col3"><para>####</para></entry>
            </row>
            <row>
            <entry align="center" colname="col1"><para><unitsgrp><metric>####</metric><english>####</english></unitsgrp></para></entry>
            <entry align="center" colname="col3"><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <para>The preceding table is a reference that can be used when checking the resistance of the passive analog sensors.</para>
            <table frame="all" id="i08790104.6">
            <tgroup align="center" cols="2">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1"/>
            <colspec colname="col2"/>
            <tbody>
            <row>
            <entry colname="col1"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>Float Position</para></entry>
            <entry colname="col2"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>Resistance (ohms)</para></entry>
            </row>
            <row>
            <entry colname="col1"><para>Full</para></entry>
            <entry colname="col2"><para>####</para></entry>
            </row>
            <row>
            <entry colname="col1"><para>3/4</para></entry>
            <entry colname="col2"><para>####</para></entry>
            </row>
            <row>
            <entry colname="col1"><para>1/2</para></entry>
            <entry colname="col2"><para>####</para></entry>
            </row>
            <row>
            <entry colname="col1"><para>1/4</para></entry>
            <entry colname="col2"><para>####</para></entry>
            </row>
            <row>
            <entry colname="col1"><para>Empty</para></entry>
            <entry colname="col2"><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <para>The preceding table is a reference that can be used when checking the resistance of the passive analog sensors.</para>
            </sect>`;
          }
      
          let dtc = `<sect id="i08790104.7">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790104.8" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in the circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure and in good condition. If a problem with a connection is found, correct the problem and verify that this DTC is active before performing this procedure.</para>
          <steplist>
          <step id="i08790104.9">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790104.10">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script12() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
              `<randitem>FMI <code>3</code>, proceed to <xref format="dita" href="#i08790105/i08790105.10" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>4</code>, proceed to <xref format="dita" href="#i08790105/i08790105.15" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>8</code>, proceed to <xref format="dita" href="#i08790105/i08790105.19" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>13</code>, proceed to <xref format="dita" href="#i08790105/i08790105.23" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i08790105.10">
            <title>FMI 3</title>
            <table frame="all" id="i08790105.11" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="132.87*"/>
            <colspec colname="col2" colwidth="53.28*"/>
            <colspec colname="col3" colwidth="166.89*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Voltage At The Sensor</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry colname="col1"><para>1. Turn key start switch and disconnect switch <position>ON</position>.</para><?Pub _newline?><para>2. Refer to the schematic to determine the voltage source for the sensor.</para><?Pub _newline?><para>3. At the machine harness connector for the sensor, insert multimeter probes along the contact of the sensor supply and along frame ground.</para><?Pub _newline?><para>4. At the sensor harness connector, measure voltage between the sensor supply and frame ground.</para></entry>
            <entry colname="col2"><para>Voltage reading is correct for the sensor.</para></entry>
            <entry colname="col3"><para><emphasis>Result:</emphasis> The voltage reading is correct for the sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Harness For An Open</label> Table <xref format="dita" href="#i08790105/i08790105.12" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage is NOT correct for the sensor. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Examine all the connectors that are in the circuit. Ensure that the connections are clean, secure, and are in good condition. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.14" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790105.12" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="132.87*"/>
            <colspec colname="col2" colwidth="53.09*"/>
            <colspec colname="col3" colwidth="167.08*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Harness For An Open</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the machine harness connector from the sensor.</para><?Pub _newline?><para>3. At the machine harness connector for the sensor, connect a jumper wire between the sensor return contact and signal contact.</para><?Pub _newline?><para>4. Turn the key switch and disconnect switch <position>ON</position>.</para><?Pub _newline?><para>5. Observe the status of the DTC.</para></entry>
            <entry><para>The DTC changes from an FMI <code>3</code> to an FMI <code>4</code>.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC changes from an FMI <code>3</code> to an FMI <code>4</code>. The sensor has failed. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.14" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC does not change from an FMI <code>3</code> to an FMI <code>4</code>. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check Signal Circuit For A Short to +Battery</label> Table <xref format="dita" href="#i08790105/i08790105.13" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790105.13" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="132.87*"/>
            <colspec colname="col2" colwidth="53.09*"/>
            <colspec colname="col3" colwidth="167.08*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check Signal Circuit For A Short to +Battery</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the ECM harness connectors. The sensor harness connector remains disconnected.</para><?Pub _newline?><para>3. Remove the jumper wire that was installed in the previous test step.</para><?Pub _newline?><para>4. At the ECM harness connector, measure the resistance between the signal contact and all other +battery circuits used in the ECM harness connectors.</para></entry>
            <entry><para>Each resistance is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each resistance is greater than 5000 ohms. The harness circuit is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.14" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance is less than 5 ohms. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> A short exists in the harness between the signal circuit and the circuit with the low-resistance measurement. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or corroded connection in the circuit. A resistance measurement greater than 5000 ohms indicates an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.14" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790105.14" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="132.87*"/>
            <colspec colname="col2" colwidth="53.09*"/>
            <colspec colname="col3" colwidth="167.08*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790105.15">
            <title>FMI 4</title>
            <table frame="all" id="i08790105.16" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="132.97*"/>
            <colspec colname="col2" colwidth="52.94*"/>
            <colspec colname="col3" colwidth="167.40*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Sensor</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the disconnect switch and the key start switch to the <position>ON</position> position.</para><?Pub _newline?><para>2. Disconnect the sensor from the machine harness.</para><?Pub _newline?><para>3. Observe the status of the DTC as the sensor is disconnected from the harness.</para></entry>
            <entry><para>The DTC changes from an FMI <code>4</code> to an FMI <code>3</code> when the sensor is disconnected.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC changes from an FMI <code>4</code> to an FMI <code>3</code> when the sensor is disconnected. The sensor has failed. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.18" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The FMI <code>4</code> DTC remains active when sensor is disconnected. The sensor is not the cause of the problem. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal Circuit For A Short To Ground</label> Table <xref format="dita" href="#i08790105/i08790105.17" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790105.17" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="132.97*"/>
            <colspec colname="col2" colwidth="52.94*"/>
            <colspec colname="col3" colwidth="167.40*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Signal Circuit For A Short To Ground</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the harness connectors from the ECM. The sensor remains disconnected from the machine harness.</para><?Pub _newline?><para>3. At the ECM harness connector, measure the resistance between the sensor signal contact and all possible sources of ground.</para></entry>
            <entry><para>All resistance values are greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> All resistance values are greater than 5000 ohms. The harness circuit is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.18" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more readings are less than 5 ohms. A short circuit exists between the signal circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or corroded connection in the circuit. A resistance measurement greater than 5000 ohms indicates an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.18" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790105.18" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="132.97*"/>
            <colspec colname="col2" colwidth="52.94*"/>
            <colspec colname="col3" colwidth="167.40*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock .</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790105.19">
            <title>FMI 8</title>
            <table frame="all" id="i08790105.20" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="132.97*"/>
            <colspec colname="col2" colwidth="52.94*"/>
            <colspec colname="col3" colwidth="167.40*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Signal Of The Sensor</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. At the back of the harness connector for the sensor, insert multimeter probes along the signal contact and return contact.</para><?Pub _newline?><para><emphasis>Note:</emphasis> Use <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET) Service Tool if access to the sensor while operating the machine, is not safe.</para><?Pub _newline?><para>3. Turn the disconnect switch and the key start switch to the <position>ON</position> position.</para><?Pub _newline?><para>4. Monitor the signal of the sensor with a digital multimeter.</para><?Pub _newline?><para>5. Without disconnecting the sensor or the hardware that is associated with the sensor from the machine, take the sensor through the full operating range.</para><?Pub _newline?><para><emphasis>Note:</emphasis> Refer to the table above for the proper signal.</para></entry>
            <entry><para>The signal from the sensor responds in the manner that is described in the table above.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The signal from the sensor responds correctly. The sensor is operating correctly. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check For An Open In The Signal Circuit</label> Table <xref format="dita" href="#i08790105/i08790105.21" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The signal from the sensor does not respond correctly. The sensor is not operating correctly. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.22" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790105.21" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="132.97*"/>
            <colspec colname="col2" colwidth="52.94*"/>
            <colspec colname="col3" colwidth="167.40*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For An Open In The Signal Circuit</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the machine harness connector from the sensor.</para><?Pub _newline?><para>3. At the machine harness connector for the sensor, connect a jumper wire between the return contact and signal contact .</para><?Pub _newline?><para>4. Disconnect the machine harness connectors J1 and J2 from the ECM.</para><?Pub _newline?><para>5. At the ECM harness connector, measure the resistance between the signal contact and return contact.</para></entry>
            <entry><para>The reading is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The measurement is less than 5 ohms. The signal and return circuit are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.22" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The measurement is greater than 5000 ohms. The signal circuit in the harness is open. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.22" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790105.22" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="132.97*"/>
            <colspec colname="col2" colwidth="52.94*"/>
            <colspec colname="col3" colwidth="167.40*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790105.23">
            <title>FMI 13</title>
            <table frame="all" id="i08790105.24" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="119.36*"/>
            <colspec colname="col2" colwidth="47.52*"/>
            <colspec colname="col3" colwidth="150.26*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check the Calibration</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Perform the calibration procedure for the sensor. Refer to the <pubref><pubtitle>Calibration</pubtitle></pubref> procedure in this manual.</para><?Pub _newline?><para>2. Observe the status of the DTC.</para></entry>
            <entry><para>The DTC is no longer active.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The FMI <code>13</code> is no longer active. The calibration corrected the condition that caused the DTC. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.25" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis>The FMI <code>13</code> DTC is active. The DTC has not been corrected. Verify that the correct software has been flashed into the ECM, or that the correct ECM is installed on the machine. Then repeat the calibration. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790105/i08790105.25" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790105.25" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="119.36*"/>
            <colspec colname="col2" colwidth="47.52*"/>
            <colspec colname="col3" colwidth="150.26*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>2. Clear all DTCs.</para><?Pub _newline?><para>3. Operate the machine.</para><?Pub _newline?><para>4. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>5. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i08790105.1">
          <title>General Information</title>
          <para>Pulse Width Modulation (PWM) is a technique for controlling analog circuits with digital outputs. The duty cycle of a square wave is modulated to encode a specific analog signal level. The duty cycle is the ratio of the on-time to the period. The modulating frequency is the inverse of the period. The duty cycle is programmed into the software of the Electronic Control Module (ECM).</para>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the Pulse Width Modulation (PWM) sensors of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The following diagram or diagrams are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790105.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i08790105.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC1" colwidth="48.61*"/>
            <colspec colname="col2" colwidth="53.17*"/>
            <colspec colname="col3" colwidth="189.38*"/>
            <colspec colname="COLSPEC0" colwidth="159.21*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1" valign="middle">${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>J1939</para></entry>
            <entry align="center" valign="middle"><para>CDL</para></entry>
            <entry align="center" valign="middle"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center" valign="middle"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry><para><codedesc>####: Voltage Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><?Pub _cellfont Weight="medium"?><para><code>####-4</code></para></entry>
            <entry align="center"><?Pub _cellfont Weight="medium"?><para><code>####-4</code></para></entry>
            <entry><para><codedesc>####: Voltage Below Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><?Pub _cellfont Weight="medium"?><para><code>####-8</code></para></entry>
            <entry align="center"><?Pub _cellfont Weight="medium"?><para><code>####-8</code></para></entry>
            <entry><para><codedesc>####: Abnormal Frequency, Pulse Width, or Period</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><?Pub _cellfont Weight="medium"?><para><code>####-13</code></para></entry>
            <entry align="center"><?Pub _cellfont Weight="medium"?><para><code>####-13</code></para></entry>
            <entry><para><codedesc>####: Out of Calibration</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure figure-style="page-wide" id="i08790105.4">
            <graphic controlno="g03642044" href="x-wc://file=g03642044.cnv"/>
            <caption>
            <para>#### ECM PWM Sensors</para>
            </caption>
            </figure>
            <table frame="all" id="i08790105.5">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1"/>
            <colspec colname="col2"/>
            <colspec colname="col3"/>
            <tbody>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>#### Position Sensor</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Full Rear</para></entry>
            <entry align="center" valign="middle"><para>Center</para></entry>
            <entry align="center" valign="middle"><para>Full Forward</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>10%</para></entry>
            <entry align="center" valign="middle"><para>50%</para></entry>
            <entry align="center" valign="middle"><para>90%</para></entry>
            </row>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>##### Position Sensor</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Left</para></entry>
            <entry align="center" valign="middle"><para>Neutral</para></entry>
            <entry align="center" valign="middle"><para>Right</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>10%</para></entry>
            <entry align="center" valign="middle"><para>50%</para></entry>
            <entry align="center" valign="middle"><para>90%</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <para>The preceding table is a reference that can be used when checking the signal of the PWM sensors.</para>
            </sect>`;
          }
      
          let dtc = `<sect id="i08790105.6">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790105.7" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, use <trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET) Service Tool or the machine monitors to check for an active DTC <code>41</code>. The DTC <code>41</code> indicates a failure of the 8 VDC power supply on the ECM. If the DTC is present, refer to the <emphasis>Sensor Supply - Test</emphasis> story to correct this problem before continuing. For transducers powered via the fuse panel, check the condition of the appropriate fuse before beginning the troubleshooting procedure.</para>
          <para>Inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. If a problem with a connection is found, correct the problem and verify that the diagnostic DTC is active before performing a troubleshooting procedure. For sensors powered via the fuse panel, check the condition of the appropriate fuse before beginning the troubleshooting procedure.</para>
          <steplist>
          <step id="i08790105.8">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790105.9">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script13() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
              `<randitem>FMI <code>3</code>, proceed to <xref format="dita" href="#i08790106/i08790106.9" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>4</code>, proceed to <xref format="dita" href="#i08790106/i08790106.14" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i08790106.9">
            <title>FMI 3</title>
            <table frame="all" id="i08790106.10" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="130.21*"/>
            <colspec colname="col2" colwidth="49.06*"/>
            <colspec colname="col3" colwidth="162.47*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Voltage At The Sensors</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry colname="col1"><para>1. Turn key start switch and disconnect switch <position>ON</position>.</para><?Pub _newline?><para>2. Disconnect the machine harness connector for the sensors.</para><?Pub _newline?><para>3. At the machine harness connector for the sensors, measure the voltage between the sensor supply contact and the sensor return contact.</para></entry>
            <entry colname="col2"><para>Voltage reading is correct for the sensors.</para></entry>
            <entry colname="col3"><para><emphasis>Result:</emphasis> The voltage reading is correct for the sensors. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790106/i08790106.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage is greater than the supply for the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Power Supply At The ECM</label> Table <xref format="dita" href="#i08790106/i08790106.11" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790106.11" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="130.09*"/>
            <colspec colname="col2" colwidth="49.17*"/>
            <colspec colname="col3" colwidth="162.47*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Power Supply At The ECM</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. At the J1 harness connector for the ECM, use a Removal Tool to remove the supply wire and the sensor return wire. The harness connector remains connected to the ECM.</para><?Pub _newline?><para>3. Turn the disconnect switch and the key start switch to the <position>ON</position> position.</para><?Pub _newline?><para>4. Use the multimeter probes to make contact on the connector pins. Measure the voltage at the ECM pins between the sensor supply contact and sensor return contact .</para></entry>
            <entry><para>Voltage reading is correct for the supply.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The voltage is correct. The ECM power supply is correct. Install the wires and sockets that were removed from the ECM connector back into the original locations. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check For A Short In the Harness</label> Table <xref format="dita" href="#i08790106/i08790106.12" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage measurement is greater than the supply voltage. The measurement is not correct. The ECM may have failed. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790106/i08790106.13" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790106.12" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="129.90*"/>
            <colspec colname="col2" colwidth="49.37*"/>
            <colspec colname="col3" colwidth="162.47*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check For A Short In the Harness</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The sensors remain disconnected from the machine harness.</para><?Pub _newline?><para>2. The key start switch and disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>3. Disconnect the machine harness connectors from the ECM.</para><?Pub _newline?><para>4. At the ECM harness connector, measure the resistance between the supply contact and all the other contacts that are used for the ECM.</para></entry>
            <entry><para>Each resistance is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each resistance is greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790106/i08790106.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more readings less than 5 ohms. There is a short between the signal contact and the circuit with the low resistance. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Refer to the complete electrical schematic. Examine all the connectors of the machine harness for possible short circuits. Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790106/i08790106.13" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790106.13" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="129.90*"/>
            <colspec colname="col2" colwidth="49.37*"/>
            <colspec colname="col3" colwidth="162.47*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTC .</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790106.14">
            <title>FMI 4</title>
            <table frame="all" id="i08790106.15" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="130.00*"/>
            <colspec colname="col2" colwidth="49.22*"/>
            <colspec colname="col3" colwidth="162.77*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Sensors</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry colname="col1"><para>1. Turn the key start switch and disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>2. Observe the status of the DTC as each sensor is disconnected.</para></entry>
            <entry colname="col2"><para>The FMI <code>4</code> is no longer active when one of the sensors on the supply circuit is disconnected.</para></entry>
            <entry colname="col3"><para><emphasis>Result:</emphasis> The DTC is not active when one of the sensors in the supply circuit is disconnected. The power supply circuit is correct. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repeat this test step to determine the sensor that causes the problem. Replace the sensor that is causing the problem. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790106/i08790106.18" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC is still active. Disconnecting the sensors in the circuit did not affect the status of the DTC. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal Circuit For A Short To Ground</label> Table <xref format="dita" href="#i08790106/i08790106.16" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790106.16" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="130.00*"/>
            <colspec colname="col2" colwidth="49.22*"/>
            <colspec colname="col3" colwidth="162.77*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Signal Circuit For A Short To Ground</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the harness connectors from the ECM.</para><?Pub _newline?><para>3. Measure the resistance between the power supply contact and frame ground.</para><?Pub _newline?><para>4. Measure the resistance between the power supply contact and all the other contacts that are used for the ECM.</para></entry>
            <entry><para>Each resistance is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each resistance is greater than 5000 ohms. The harness circuit is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Power Supply At The ECM</label> Table<xref format="dita" href="#i08790106/i08790106.17" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance is less than 5 ohms. The power supply circuit is shorted to ground. The short circuit exists between the power supply circuit and the circuit with the low-resistance measurement. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790106/i08790106.18" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790106.17" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="130.00*"/>
            <colspec colname="col2" colwidth="49.22*"/>
            <colspec colname="col3" colwidth="162.77*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Power Supply At The ECM</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. At the J1 harness connector for the ECM, use a removal tool to remove the supply wire and the sensor return wire. The harness connector remains connected to the ECM.</para><?Pub _newline?><para>3. Turn the disconnect switch and the key start switch to the <position>ON</position> position.</para><?Pub _newline?><para>4. Use the multimeter probes to make contact on the connector pins. Measure the voltage at the ECM pins between the sensor supply contact and sensor return contact .</para></entry>
            <entry><para>Voltage reading is correct for the supply.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The voltage is correct. The ECM power supply is correct. Install the wires and sockets that were removed from the ECM connector back into the original locations. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790106/i08790106.18" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The voltage measurement is less than the supply voltage. The measurement is not correct. The ECM has failed. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790106/i08790106.18" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790106.18" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="130.00*"/>
            <colspec colname="col2" colwidth="49.22*"/>
            <colspec colname="col3" colwidth="162.77*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i08790106.1">
          <title>General Information</title>
          <para>The sensor supply is the voltage output originating from the Electronic Control Module (ECM) connections.</para>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the sensor supply of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The following diagram or diagrams are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790106.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i08790106.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC1" colwidth="49.94*"/>
            <colspec colname="col2" colwidth="49.94*"/>
            <colspec colname="col3" colwidth="183.45*"/>
            <colspec colname="COLSPEC0" colwidth="160.96*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1" valign="top"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>J1939</para></entry>
            <entry align="center" valign="top"><para>CDL</para></entry>
            <entry align="center" valign="top"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center" valign="top"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry align="center" colname="col2"><para><code>####-3</code></para></entry>
            <entry colname="col3"><para><codedesc>####: Voltage Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><para><code>####-4</code></para></entry>
            <entry align="center"><para><code>####-4</code></para></entry>
            <entry><para><codedesc>####: Voltage Below Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure figure-style="page-wide" id="i08790106.4">
            <graphic controlno="g03642785" href="x-wc://file=g03642785.cnv"/>
            <caption>
            <para>Sensor Supply circuits</para>
            </caption>
            </figure>
            </sect>`;
          }
      
          let dtc = `<sect id="i08790106.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790106.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure. For sensors powered via the fuse panel, check the condition of the appropriate fuse before beginning the troubleshooting procedure.</para>
          <steplist>
          <step id="i08790106.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790106.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script14() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
            `<randitem>FMI <code>3</code>, proceed to <xref format="dita" href="#i09808116/i09808116.9" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>4</code>, proceed to <xref format="dita" href="#i09808116/i09808116.12" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i09808116.9">
            <title>FMI 3</title>
            <table frame="all" id="i09808116.10" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="122.75*"/>
            <colspec colname="col2" colwidth="48.14*"/>
            <colspec colname="col3" colwidth="153.88*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check The Machine Harness For A Short</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry colname="col1"><?Pub _cellfont Weight="medium"?><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the harness connection at solenoid.</para><?Pub _newline?><para>3. Disconnect the harness connection at the ECM.</para><?Pub _newline?><para>4. Measure the resistance of solenoid signal contact to all other ECM connections.</para></entry>
            <entry colname="col2"><para>Each reading is greater than 5000 ohms.</para></entry>
            <entry colname="col3"><para><emphasis>Result:</emphasis> All resistance readings are greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table<xref format="dita" href="#i09808116/i09808116.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more readings are less than 5 ohms. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> A short exists between the signal contact and the circuit with the low resistance. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table<xref format="dita" href="#i09808116/i09808116.11" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i09808116.11" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="122.75*"/>
            <colspec colname="col2" colwidth="48.13*"/>
            <colspec colname="col3" colwidth="153.87*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The diagnostic trouble code is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i09808116.12">
            <title>FMI 4</title>
            <table frame="all" id="i09808116.13" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="122.75*"/>
            <colspec colname="col2" colwidth="48.14*"/>
            <colspec colname="col3" colwidth="153.88*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Machine Harness For An Open</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="top"><para>Values</para></entry>
            <entry align="center" valign="top"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Disconnect the solenoid from the machine harness.</para><?Pub _newline?><para>3. Disconnect the harness connectors at the ECM.</para><?Pub _newline?><para>4. Connect a jumper wire between the signal contact and return contact at the solenoid harness connector.</para><?Pub _newline?><para>5. At the ECM side of the machine harness, measure the resistance between the signal and return contact.</para></entry>
            <entry><para>Each reading is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The reading is less than 5 ohms, the harness is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Harness For A Short To Ground</label> Table <xref format="dita" href="#i09808116/i09808116.14" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The reading is greater than 5000 ohms. There is an open in machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The open is in the signal wire or the return wire. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i09808116/i09808116.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i09808116.14" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="122.57*"/>
            <colspec colname="col2" colwidth="48.31*"/>
            <colspec colname="col3" colwidth="153.87*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check The Harness For A Short To Ground</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and disconnect switch remain in the <position>OFF</position> position</para><?Pub _newline?><para>2. The ECM and solenoid remain disconnected from the machine harness.</para><?Pub _newline?><para>3. Remove the jumper wire that was installed in the previous Test Step.</para><?Pub _newline?><para>4. Measure the resistance between the signal contact and frame ground. Record the measurement.</para><?Pub _newline?><para>5. Measure the resistance between the return contact and frame ground. Record the measurement.</para></entry>
            <entry><para>Each reading is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The reading is greater than 5000 ohms, the harness is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i09808116/i09808116.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The reading is less than 5 ohms. There is a short in the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The short is between the wires with the low-resistance measurement. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i09808116/i09808116.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i09808116.15" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="122.57*"/>
            <colspec colname="col2" colwidth="48.31*"/>
            <colspec colname="col3" colwidth="153.87*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i09808116.1">
          <title>General Information</title>
          <para>Solenoids are used to shutoff, release, distribute, or mix fluids on the machine. Generally, multiple solenoids are located together on a manifold. The solenoid converts electrical energy into magnetic energy, moving a spool located inside the housing of the valve. A spring is used to hold the spool in position until the solenoid is energized. The magnetic force that acts on the valve spool is created when a coil inside the solenoid is energized.</para>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the solenoid return circuits of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each ECM on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The diagram or diagrams below are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i09808116.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i09808116.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC1" colwidth="59.94*"/>
            <colspec colname="col2" colwidth="57.36*"/>
            <colspec colname="col3" colwidth="204.34*"/>
            <colspec colname="COLSPEC0" colwidth="186.35*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center"><para>J1939</para></entry>
            <entry align="center"><para>CDL</para></entry>
            <entry align="center"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry><para><codedesc>####: Voltage Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><para><code>####-4</code></para></entry>
            <entry align="center"><para><code>####-4</code></para></entry>
            <entry><para><codedesc>####: Voltage Below Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure figure-style="page-wide" id="i09808116.4">
            <graphic controlno="g03634716" href="x-wc://file=g03634716.cnv"/>
            <caption>
            <para>#### ECM Solenoid Connections</para>
            </caption>
            </figure>
            </sect>`;
          }
      
          let dtc = `<sect id="i09808116.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i09808116.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. Check the wiring harness for pinch points or abrasions. Look for and repair areas that indicate wires are exposed. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i09808116.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i09808116.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script15() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
              `<randitem>FMI <code>3</code>, proceed to <xref format="dita" href="#i08790107/i08790107.9" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>5</code>, proceed to <xref format="dita" href="#i08790107/i08790107.12" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>6</code>, proceed to <xref format="dita" href="#i08790107/i08790107.16" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>11</code>, proceed to <xref format="dita" href="#i08790107/i08790107.20" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>13</code>, proceed to <xref format="dita" href="#i08790107/i08790107.24" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i08790107.9">
            <title>FMI 3</title>
            <table frame="all" id="i08790107.10" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="105*"/>
            <colspec colname="col2" colwidth="40*"/>
            <colspec colname="col3" colwidth="125*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont?><para>Check The Machine Harness For A Short</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry colname="col1"><?Pub _cellfont Weight="medium"?><para>1. The start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the harness connector from the solenoid.</para><?Pub _newline?><para>3. Disconnect the ECM machine harness connectors.</para><?Pub _newline?><para>4. Measure the resistance between the solenoid signal contact and all the contacts that are used in the ECM.</para></entry>
            <entry colname="col2"><para>Each reading is greater than 5000 ohms.</para></entry>
            <entry colname="col3"><para><emphasis>Result:</emphasis> All resistance readings are greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790107/i08790107.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more readings are less than 5 ohms.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> A short exists between the signal contact and the circuit with the low resistance. Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790107/i08790107.11" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790107.11" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="105.00*"/>
            <colspec colname="col2" colwidth="40.00*"/>
            <colspec colname="col3" colwidth="125.00*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont?><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTC.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790107.12">
            <title>FMI 5</title>
            <table frame="all" id="i08790107.13" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="105*"/>
            <colspec colname="col2" colwidth="40*"/>
            <colspec colname="col3" colwidth="125*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Solenoid</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the start switch and the disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Disconnect the solenoid from the machine harness.</para><?Pub _newline?><para>3. At the harness connector for the solenoid, install a jumper wire between contact 1 and contact 2.</para><?Pub _newline?><para>4. Turn the start switch and the disconnect switch <position>ON</position>. Do not start the engine.</para></entry>
            <entry><para>The FMI <code>5</code> changes to an FMI <code>6</code> after the jumper wire is installed.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The harness is correct. The FMI <code>5</code> DTC changes to an FMI <code>6</code> when the jumper wire is installed. The solenoid has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the solenoid. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790107/i08790107.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC remains active. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Harness For An Open</label> Table <xref format="dita" href="#i08790107/i08790107.14" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790107.14" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="105.00*"/>
            <colspec colname="col2" colwidth="40.00*"/>
            <colspec colname="col3" colwidth="125.00*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Harness For An Open</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the start switch and the disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Disconnect the harness connectors from the ECM.</para><?Pub _newline?><para>3. The jumper wire remains installed.</para><?Pub _newline?><para>4. At the machine harness connector for the ECM, measure the resistance between the signal circuit and return circuit.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> For solenoids that return to ground, measure the resistance between the signal circuit at the ECM harness connector and frame ground.</para></entry>
            <entry><para>Each reading is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The reading is less than 5 ohms. The harness is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790107/i08790107.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The reading is greater than 5000 ohms. The open is in the signal circuit or the return circuit.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790107/i08790107.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790107.15" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="105.00*"/>
            <colspec colname="col2" colwidth="40.00*"/>
            <colspec colname="col3" colwidth="125.00*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTC.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790107.16">
            <title>FMI 6</title>
            <table frame="all" id="i08790107.17" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="105*"/>
            <colspec colname="col2" colwidth="40*"/>
            <colspec colname="col3" colwidth="125*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Solenoid</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the start switch and the disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Disconnect the solenoid from the machine harness.</para><?Pub _newline?><para>3. Turn the start switch and the disconnect switch <position>ON</position>. Do not start the engine.</para><?Pub _newline?><para>4. Observe the status of the DTC.</para></entry>
            <entry><para>The FMI <code>6</code> changes to an FMI <code>5</code> after the solenoid is disconnected.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The circuit is correct. The solenoid has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repeat the test. Verify the solenoid failure. Replace the solenoid. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790107/i08790107.19" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC remains active. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check Machine Harness For A Short To Ground</label> Table <xref format="dita" href="#i08790107/i08790107.18" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790107.18" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="105.00*"/>
            <colspec colname="col2" colwidth="40.00*"/>
            <colspec colname="col3" colwidth="125.00*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check Machine Harness For A Short To Ground</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The machine harness remains disconnected from the solenoid.</para><?Pub _newline?><para>2. Turn the start switch and the disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>3. Disconnect the harness connectors from the ECM.</para><?Pub _newline?><para>4. At the harness connector for the ECM, measure the resistance between the solenoid signal contact and all ground contacts.</para></entry>
            <entry><para>Each reading is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Machine harness correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790107/i08790107.19" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more of the resistance measurements are less than 5 ohms. A short circuit exists in the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> A short circuit exists between the signal wire and the circuit with the low resistance. Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790107/i08790107.19" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790107.19" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="105.00*"/>
            <colspec colname="col2" colwidth="40.00*"/>
            <colspec colname="col3" colwidth="125.00*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTC.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790107.20">
            <title>FMI 11</title>
            <table id="i08790107.21" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colsep="1" colwidth="108.85*"/>
            <colspec colname="col2" colsep="1" colwidth="41.51*"/>
            <colspec colname="col3" colwidth="129.63*"/>
            <thead>
            <row rowsep="1">
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Solenoid</para></entry>
            </row>
            <row rowsep="1">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row rowsep="1">
            <entry><para>1. Turn the start switch and the disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Disconnect the solenoid from the machine harness.</para><?Pub _newline?><para>3. Place a jumper wire between contact 1 and contact 2, at the harness connector for the solenoid.</para><?Pub _newline?><para>4. Turn the start switch and the disconnect switch <position>ON</position>. Do not start the engine.</para><?Pub _newline?><para>5. As the jumper is removed and connected to the contacts, observe any DTC change.</para></entry>
            <entry><para>The DTC changes to FMI <code>6</code> after the jumper wire is installed.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The circuit is correct. The solenoid has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the solenoid. <?Pub _newline?><?Pub _newline?>After replacement of the solenoid, confirm that the DTC is not active.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC remains active. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Machine Harness For An Open</label> Table <xref format="dita" href="#i08790107/i08790107.22" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790107.22" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="108.85*"/>
            <colspec colname="col2" colwidth="41.66*"/>
            <colspec colname="col3" colwidth="129.48*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Machine Harness For An Open</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the start switch and the disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Disconnect the harness connectors from the ECM (or switch panel).</para><?Pub _newline?><para>3. The jumper wire remains installed.</para><?Pub _newline?><para>4. At the machine harness connector for the ECM, measure the resistance at the ECM contacts for the solenoid.</para></entry>
            <entry><para>All readings are less than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> All resistance less than 5000 ohms.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The reading is greater than 5 ohms. The circuit is open in the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The open is in the wire for the solenoid signal or the return wire for the solenoid. Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790107/i08790107.23" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790107.23" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="108.70*"/>
            <colspec colname="col2" colwidth="41.81*"/>
            <colspec colname="col3" colwidth="129.48*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTC.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist now. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790107.24">
            <title>FMI 13</title>
            <table id="i08790107.25" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="108.70*"/>
            <colspec colname="col2" colwidth="41.81*"/>
            <colspec colname="col3" colwidth="129.48*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Calibration</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Perform the calibration procedure for the solenoid. Refer to the calibration procedure in <pubref><pubtype>Testing and Adjusting</pubtype><media><formno>####</formno></media></pubref><!--Insert Testing and Adjusting Media number or a hyperlink here.--> for this machine.</para><?Pub _newline?><para>2. Observe the status of the DTC.</para></entry>
            <entry><?Pub _newline?><para>The calibration was successful and the DTC is no longer active.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC is no longer active. The calibration corrected the condition that caused the DTC. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The FMI <code>13</code> DTC is active. The DTC has not been corrected. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Verify that the correct software has been flashed into the ECM, or that the correct ECM is installed on the machine. Then repeat the calibration.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i08790107.1">
          <title>General Information</title>
          <para>Solenoids are used to shutoff, release, distribute, or mix fluids on the machine. Generally, multiple solenoids are located together on a manifold. The solenoid converts electrical energy into magnetic energy, moving a spool located inside the housing. As a result the valve is opened. A spring is used to hold the spool in position until the solenoid is energized.</para>
          <para>The magnetic force that acts on the valve spool is created when a coil inside the solenoid is energized.</para>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the solenoid valves of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each Electronic Control Module (ECM) on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The following diagram or diagrams are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790107.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i08790107.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="COLSPEC1" colwidth="8.00*"/>
            <colspec colname="col2" colwidth="8.00*"/>
            <colspec colname="col3" colwidth="28.00*"/>
            <colspec colname="COLSPEC0" colwidth="28.00*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1" valign="middle"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>J1939</para></entry>
            <entry align="center" valign="middle"><para>CDL</para></entry>
            <entry align="center" valign="middle"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center" valign="middle"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center" valign="middle"><para><code>####-3</code></para></entry>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry><para><codedesc>####: Voltage Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para><code>####-5</code></para></entry>
            <entry align="center"><para><code>####-5</code></para></entry>
            <entry><para><codedesc>####: Current Below Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para><code>####-6</code></para></entry>
            <entry align="center"><para><code>####-6</code></para></entry>
            <entry><para><codedesc>####: Current Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para><code>####-11</code></para></entry>
            <entry align="center"><para><code>####-11</code></para></entry>
            <entry><para><codedesc>####: Failure Mode Not Identifiable</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para><code>####-13</code></para></entry>
            <entry align="center"><para><code>####-13</code></para></entry>
            <entry><para><codedesc>####: Out Of Calibration</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure figure-style="page-wide" id="i08790107.4">
            <graphic controlno="g03634716" href="x-wc://file=g03634716.cnv"/>
            <caption>
            <para>#### ECM solenoid connections</para>
            </caption>
            </figure>
            </sect>`;
          }
      
          let dtc = `<sect id="i08790107.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790107.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. Check the wiring harness for pinch points or abrasions. Look for and repair areas that indicate wires are exposed. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i08790107.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790107.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script16() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
            `<randitem>FMI <code>3</code>, proceed to <xref format="dita" href="#i08790108/i08790108.9" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>6</code>, proceed to <xref format="dita" href="#i08790108/i08790108.14" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i08790108.9">
            <title>FMI 3</title>
            <table frame="all" id="i08790108.10" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="118.67*"/>
            <colspec colname="col2" colwidth="47.76*"/>
            <colspec colname="col3" colwidth="149.36*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont Weight="medium"?><para><emphasis>Check The Switch</emphasis></para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the switch from the machine harness. Place the switch in the <position>UNLOCKED</position> position.</para><?Pub _newline?><para>3. At the back of the switch, measure the resistance between contacts <label>B</label> and <label>C</label></para></entry>
            <entry><para>The resistance measurement is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Results:</emphasis> The resistance measurement is less than 5 ohms. The switch is operating properly. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal Circuit For An Open</label> Table <xref format="dita" href="#i08790108/i08790108.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Results:</emphasis> The resistance measurement is greater than 5000 ohms. The switch has failed. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repeat this Test Step to verify that the switch has failed. Toggle the switch state while observing the resistance measurement. If the resistance measurement is greater than 5000 ohms, the switch has failed. Replace the switch. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790108/i08790108.13" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790108.11" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.67*"/>
            <colspec colname="col2" colwidth="47.76*"/>
            <colspec colname="col3" colwidth="149.36*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont Weight="medium"?><para><emphasis>Check The Signal Circuit For An Open</emphasis></para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. The key start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the machine harness connectors from the ECM and remove the relay.</para><?Pub _newline?><para>3. Reconnect the switch to the machine harness. Place the switch in the <position>UNLOCKED</position> position.</para><?Pub _newline?><para>4. At the ECM harness connector, insert a multimeter probe at the switch signal wire contact.</para><?Pub _newline?><para>5. At the harness connector for the relay, insert a multimeter probe at the relay coil contact.</para><?Pub _newline?><para>6. Measure the resistance between the signal contact and relay coil contact.</para></entry>
            <entry><para>The resistance measurement is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Results:</emphasis> The resistance measurement is less than 5 ohms. The wiring harness is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal Circuit For A Short</label> Table<xref format="dita" href="#i08790108/i08790108.12" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Results:</emphasis> The resistance measurement is greater than 5000 ohms. There is an open in the harness. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790108/i08790108.13" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790108.12" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.67*"/>
            <colspec colname="col2" colwidth="47.76*"/>
            <colspec colname="col3" colwidth="149.36*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont Weight="medium"?><para><emphasis>Check The Signal Circuit For A Short</emphasis></para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. The key start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. The ECM harness connectors and relay remain disconnected.</para><?Pub _newline?><para>3. At the ECM harness connector, measure the resistance between the switch signal circuit and all the other contacts that are used in the ECM.</para></entry>
            <entry><para>Each resistance measurement is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Results:</emphasis> Each resistance measurement is greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790108/i08790108.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Results:</emphasis> A resistance measurement is less than 5 ohms. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> A short exists in the harness between the signal circuit and the circuit with the low-resistance measurement. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790108/i08790108.13" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790108.13" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.67*"/>
            <colspec colname="col2" colwidth="47.76*"/>
            <colspec colname="col3" colwidth="149.36*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont Weight="medium"?><para><emphasis>Check If The Diagnostic Trouble Code Remains</emphasis></para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Results:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Results:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790108.14">
            <title>FMI 6</title>
            <table frame="all" id="i08790108.15" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="118.36*"/>
            <colspec colname="col2" colwidth="47.90*"/>
            <colspec colname="col3" colwidth="149.05*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check the Relay</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Remove the relay from the harness.</para><?Pub _newline?><para>3. Turn the disconnect switch and the key start switch to the <position>ON</position> position.</para><?Pub _newline?><para>4. Observe the status of the DTC.</para></entry>
            <entry><para>The DTC is no longer active when the relay is disconnected.</para></entry>
            <entry><para><emphasis>Results:</emphasis> The DTC is no longer active when the relay is disconnected. The circuit is correct. The relay has failed. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repeat this Test Step to verify the relay failure. Replace the relay. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790108/i08790108.17" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Results:</emphasis> The DTC remains active. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Energize Circuit Of The Relay For A Short To Ground</label> Table <xref format="dita" href="#i08790108/i08790108.16" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790108.16" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.42*"/>
            <colspec colname="col2" colwidth="48.26*"/>
            <colspec colname="col3" colwidth="148.63*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont Weight="medium"?><para><emphasis>Check The Energize Circuit Of The Relay For A Short To Ground</emphasis></para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. The relay remains disconnected from the machine harness.</para><?Pub _newline?><para>3. Disconnect the harness connectors from the ECM.</para><?Pub _newline?><para>4. Place the switch in the <position>UNLOCKED</position> position.</para><?Pub _newline?><para>5. At the ECM harness connectors, measure the resistance between the relay signal contact and frame ground.</para></entry>
            <entry><para>The resistance measurement is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Results:</emphasis> The resistance measurement is greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790108/i08790108.17" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Results:</emphasis> The resistance measurement is not greater than 5000 ohms. There is a short in the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790108/i08790108.17" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790108.17" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="118.42*"/>
            <colspec colname="col2" colwidth="48.26*"/>
            <colspec colname="col3" colwidth="148.63*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><?Pub _cellfont Weight="medium"?><para><emphasis>Check If The Diagnostic Trouble Code Remains</emphasis></para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Results:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Results:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <propname>Caterpillar</propname>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i08790108.1">
          <title>General Information</title>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the switch-controlled solenoid circuits of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each Electronic Control Module (ECM) on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The following diagram or diagrams are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          <para>Solenoids are used to shutoff, release, distribute, or mix fluids on the machine. Generally, multiple solenoids are located together on a manifold. The solenoid converts electrical energy into magnetic energy, moving a spool located inside the housing of the valve. A spring is used to hold the spool in position until the solenoid is energized.</para>
          <para>The magnetic force that acts on the valve spool is created when a coil inside the solenoid is energized.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790108.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i08790108.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC1" colwidth="55.41*"/>
            <colspec colname="col2" colwidth="53.49*"/>
            <colspec colname="col3" colwidth="195.35*"/>
            <colspec colname="COLSPEC0" colwidth="194.74*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center"><para>J1939</para></entry>
            <entry align="center"><para>CDL</para></entry>
            <entry align="center"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry align="center" colname="col2"><para><code>####-3</code></para></entry>
            <entry colname="col3"><para><codedesc>####: Voltage Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><para><code>####-6</code></para></entry>
            <entry align="center"><para><code>####-6</code></para></entry>
            <entry><para><codedesc>####: Current Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure figure-style="page-wide" id="i08790108.4">
            <graphic controlno="g03654619" href="x-wc://file=g03654619.cnv"/>
            <caption>
            <para>Switch controlled solenoid connections</para>
            </caption>
            </figure>
            </sect>`;
          }
      
          let dtc = `<sect id="i08790108.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790108.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. Check the wiring harness for pinch points or abrasions. Look for and repair areas that indicate wires are exposed. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i08790108.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790108.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script17() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
              `<randitem>FMI <code>2</code>, proceed to <xref format="dita" href="#i08790109/i08790109.10" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>8</code>, proceed to <xref format="dita" href="#i08790109/i08790109.15" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i08790109.10">
            <title>FMI 2</title>
            <table frame="all" id="i08790109.11" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="126.64*"/>
            <colspec colname="col2" colwidth="52.28*"/>
            <colspec colname="col3" colwidth="159.96*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Resistance Of The Sensor</para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the speed sensor from the machine harness.</para><?Pub _newline?><para>3. Measure the resistance between contacts 1 and 2 of the connector for the speed sensor.</para><?Pub _newline?><para>4. Refer to the table above for the correct resistance values.</para></entry>
            <entry align="left"><para>The resistance values for the speed sensors are correct according to the table above.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance of the speed sensor is within the expected range. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal Circuit For An Open</label> Table <xref format="dita" href="#i08790109/i08790109.12" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance of the speed sensor is outside the expected range. The speed sensor has failed. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the speed sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790109/i08790109.14" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790109.12" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="126.64*"/>
            <colspec colname="col2" colwidth="52.28*"/>
            <colspec colname="col3" colwidth="159.96*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Signal Circuit For An Open</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. The key start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the speed sensor from the machine harness.</para><?Pub _newline?><para>3. Disconnect the machine harness connectors from the ECM.</para><?Pub _newline?><para>4. At the speed sensor harness connector, insert a jumper wire between the signal and return wires.</para><?Pub _newline?><para>5. At the ECM harness connector, measure the resistance between the signal contact and the return contact.</para></entry>
            <entry><para>The resistance value is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance value is less than 5 ohms. The harness is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal For A Short</label> Table <xref format="dita" href="#i08790109/i08790109.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance is greater than 5000 ohms. There is an open circuit in the signal circuit or the return circuit. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose connection or corroded connection in the circuit. A resistance value that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790109/i08790109.14" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790109.13" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="126.64*"/>
            <colspec colname="col2" colwidth="52.28*"/>
            <colspec colname="col3" colwidth="159.96*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Signal For A Short</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Remove the jumper wire that was installed in the previous test step.</para><?Pub _newline?><para>2. Reconnect the speed sensor to the machine harness.</para><?Pub _newline?><para>3. At the ECM machine harness connectors, measure the resistance between the signal contact and all the other contacts that are used for the ECM.</para><?Pub _newline?><para>4. At the ECM machine harness connectors, measure the resistance between the return contact and all the other contacts that are used for the ECM.</para></entry>
            <entry><para>Each resistance value is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> Each resistance value is greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790109/i08790109.14" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A resistance value is less than 5 ohms. There is a short in the machine harness. The short is between the signal circuit or the return circuit and the circuit with low resistance. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790109/i08790109.14" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790109.14" pgwide="Y" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="126.64*"/>
            <colspec colname="col2" colwidth="52.28*"/>
            <colspec colname="col3" colwidth="159.96*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The diagnostic trouble code has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790109.15">
            <title>FMI 8</title>
            <table frame="all" id="i08790109.16" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="126.53*"/>
            <colspec colname="col2" colwidth="52.66*"/>
            <colspec colname="col3" colwidth="160.57*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Verify The Software Version</para></entry>
            </row>
            <row valign="middle">
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Check and record the latest software version for the machine electronic controls from SIS.</para><?Pub _newline?><para>2. Verify that the latest version of software has been loaded to the ECM.</para></entry>
            <entry><para>The software is current.</para></entry>
            <entry><para><emphasis>Result:</emphasis> All the software is current. Proceed to <label>Check The Resistance Of The Sensor</label> Table <xref format="dita" href="#i08790109/i08790109.17" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> There is a more recent software release that is available. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Flash all controls with the latest software release. <?Pub _newline?><?Pub _newline?>Refer to <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM Software - Install</pubtitle></ie-topic></pubref>. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790109/i08790109.20" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790109.17" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="126.53*"/>
            <colspec colname="col2" colwidth="52.66*"/>
            <colspec colname="col3" colwidth="160.57*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Resistance Of The Sensor</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the sensor from the machine harness.</para><?Pub _newline?><para>3. Measure the resistance between contacts 1 and 2 of the connector for the speed sensor.</para><?Pub _newline?><para>4. Refer to the table above for the correct resistance values.</para></entry>
            <entry><para>The resistance values for the speed sensors are correct according to the table above.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance of the speed sensor is within the expected range. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal Circuit For An Open</label> Table <xref format="dita" href="#i08790109/i08790109.18" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance of the speed sensor is outside the expected range. The speed sensor has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair-</emphasis> Replace the speed sensor. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790109/i08790109.20" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790109.18" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="126.53*"/>
            <colspec colname="col2" colwidth="52.66*"/>
            <colspec colname="col3" colwidth="160.57*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Signal Circuit For An Open</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and the disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the machine harness connector from the sensor.</para><?Pub _newline?><para>3. Disconnect the machine harness connectors from the ECM.</para><?Pub _newline?><para>4. At the harness connector for the sensor, place a jumper wire between the signal contact and the return contact.</para><?Pub _newline?><para>5. At machine harness connector for ECM, measure the resistance between the signal contact the return contact.</para></entry>
            <entry><para>The resistance value is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance value is less than 5 ohms. The harness is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal Circuit For A Short</label> Table <xref format="dita" href="#i08790109/i08790109.19" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance is greater than 5000 ohms. There is an open circuit in the signal circuit or the return circuit.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose connection or corroded connection in the circuit. A resistance value that is greater than 5000 ohms would indicate an open in the circuit.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790109/i08790109.20" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790109.19" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="126.53*"/>
            <colspec colname="col2" colwidth="52.66*"/>
            <colspec colname="col3" colwidth="160.57*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Signal Circuit For A Short</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The disconnect switch and the key start switch remain <position>OFF</position>.</para><?Pub _newline?><para>2. The sensor and the ECM remain disconnected from the harness.</para><?Pub _newline?><para>3. Measure the resistance between the signal contact and all other contacts used in the ECM harness connectors.</para></entry>
            <entry><para>The resistance values are greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance values are greater than 5000 ohms. The harness circuit is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790109/i08790109.20" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> A resistance value is less than 5 ohms.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> A short exists in the harness between the signal circuit and the circuit with the low-resistance value. Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance value that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790109/i08790109.20" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790109.20" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="126.53*"/>
            <colspec colname="col2" colwidth="52.66*"/>
            <colspec colname="col3" colwidth="160.57*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The diagnostic trouble code has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i08790109.1">
          <title>General Information</title>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the speed sensors of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each Electronic Control Module (ECM) on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The following diagram or diagrams are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790109.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i08790109.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="COLSPEC1" colwidth="8.00*"/>
            <colspec colname="col2" colwidth="8.00*"/>
            <colspec colname="col3" colwidth="28.00*"/>
            <colspec colname="COLSPEC0" colwidth="28.00*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1" valign="middle"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>J1939</para></entry>
            <entry align="center" valign="middle"><para>CDL</para></entry>
            <entry align="center" valign="middle"><para>Code Description</para></entry>
            <entry align="center" valign="middle"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center" valign="middle"><para><code>####-2</code></para></entry>
            <entry align="center"><para><code>####-2</code></para></entry>
            <entry><para><codedesc>####: Data Erratic, Intermittent, or Incorrect</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para><code>####-8</code></para></entry>
            <entry align="center"><para><code>####-8</code></para></entry>
            <entry><para><codedesc>####: Abnormal Frequency, Pulse Width, or Period</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure figure-style="page-wide" id="i08790109.4">
            <graphic controlno="g03654621" href="x-wc://file=g03654621.cnv"/>
            <caption>
            <para>Speed Sensor Connections</para>
            </caption>
            </figure>
            <table frame="all" id="i08790109.5" pgwide="1">
            <tgroup cols="2">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="41*"/>
            <colspec colname="col2" colwidth="57*"/>
            <thead>
            <row>
            <entry align="center" valign="top"><para>Sensor Description</para></entry>
            <entry align="center" valign="top"><para>Resistance</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para>(CID ####) #### Speed Sensor</para></entry>
            <entry align="center"><para>### &#xb1; ## ohms @ <metric>## &#xb0;C</metric><english>## &#xb0;F</english></para></entry>
            </row>
            <row>
            <entry align="center" colname="col1"><para>(CID ####) #### Speed Sensor</para></entry>
            <entry align="center" colname="col2"><para>### &#xb1; ## ohms @ <metric>## &#xb0;C</metric><english>## &#xb0;F</english></para></entry>
            </row>
            <row>
            <entry align="center" colname="col1"><para>(CID ####) #### Speed Sensor</para></entry>
            <entry align="center" colname="col2"><para>### &#xb1; ## ohms @ <metric>## &#xb0;C</metric><english>## &#xb0;F</english></para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`;
          }
      
          let dtc = `<sect id="i08790109.6">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790109.7" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure. For sensors powered via the fuse panel, check the condition of the appropriate fuse before beginning the troubleshooting procedure.</para>
          <steplist>
          <step id="i08790109.8">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790109.9">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script18() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
              `<randitem>FMI <code>2</code>, proceed to <xref format="dita" href="#i08790110/i08790110.9" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>3</code>, proceed to <xref format="dita" href="#i08790110/i08790110.14" scope="local" type="sect"></xref>.</randitem>`,
              `<randitem>FMI <code>4</code> , proceed to <xref format="dita" href="#i08790110/i08790110.20" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i08790110.9">
            <title>FMI 2</title>
            <table frame="all" id="i08790110.10" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="120.38*"/>
            <colspec colname="col2" colwidth="47.52*"/>
            <colspec colname="col3" colwidth="151.51*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Harness</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the disconnect switch and the key start switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Inspect all harness connections. Make sure that the connectors are clean and tight.</para><?Pub _newline?><para>3. Check the connectors for proper mating. Ensure that all the seals are present and in place.</para><?Pub _newline?><para>4. Check the harness for signs of damage or abrasion.</para><?Pub _newline?><para>5. Check the wires at the connector. Ensure that the wires are secured tightly into the connector. <emphasis>Take care not to pull the wire out of the connector.</emphasis></para><?Pub _newline?><para>6. Check the exposed wires at the connectors for nicks or signs of abrasion.</para><?Pub _newline?><para>7. Check for moisture inside the connector.</para></entry>
            <entry><para>The machine harness connectors are tight and free of corrosion.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The machine harness connectors are tight and free of corrosion. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Harness For An Open</label> Table <xref format="dita" href="#i08790110/i08790110.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The machine harness connectors are in need of repair. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Switch</label> Table <xref format="dita" href="#i08790110/i08790110.12" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790110.11" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="120.20*"/>
            <colspec colname="col2" colwidth="47.70*"/>
            <colspec colname="col3" colwidth="151.51*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Harness For An Open</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the machine harness connector from the switch.</para><?Pub _newline?><para>3. Disconnect the machine harness connectors from the ECM.</para><?Pub _newline?><para>4. At the harness connector for the switch, place a jumper wire between the normally open (N/O) contact and the normally closed (N/C) contact.</para><?Pub _newline?><para>5. At machine harness connector for the ECM, measure the resistance between the normally open (N/O) contact and the normally closed (N/C) contact.</para></entry>
            <entry><para>The resistance is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance is less than 5 ohms. The (N/O) and (N/C) circuits are not opened in the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Switch</label> Table <xref format="dita" href="#i08790110/i08790110.12" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance reading for the (N/O) and (N/C) circuits greater than 5000 ohms. There is an open in one circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790110/i08790110.13" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790110.12" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="120.03*"/>
            <colspec colname="col2" colwidth="47.69*"/>
            <colspec colname="col3" colwidth="151.68*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Switch</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The disconnect switch and the key start switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Remove the switch from the machine harness.</para><?Pub _newline?><para>3. Measure the resistance between the normally open contact and the switch return or ground. Toggle the operation of the switch and observe resistance changes.</para><?Pub _newline?><para>4. Measure the resistance between the normally closed contact and the switch return or ground. Toggle the operation of the switch and observe resistance changes.</para></entry>
            <entry><para>Open resistance is greater than 5000 ohms. Closed resistance is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The measurements are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790110/i08790110.13" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more of the measurements was incorrect. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the switch. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790110/i08790110.13" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790110.13" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="120.20*"/>
            <colspec colname="col2" colwidth="47.52*"/>
            <colspec colname="col3" colwidth="151.68*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790110.14">
            <title>FMI 3</title>
            <table frame="all" id="i08790110.15" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="120.31*"/>
            <colspec colname="col2" colwidth="47.56*"/>
            <colspec colname="col3" colwidth="151.81*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Harness For An Open</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the machine harness connector from the switch.</para><?Pub _newline?><para>3. Disconnect the machine harness connectors from the ECM.</para><?Pub _newline?><para>4. At the harness connector for the switch, place a jumper wire between the normally open (N/O) contact and the normally closed (N/C) contact.</para><?Pub _newline?><para>5. At machine harness connector for ECM, measure the resistance between the normally open (N/O) contact and the normally closed (N/C) contact.</para></entry>
            <entry><para>The resistance is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance is less than 5 ohms. The (N/O) and (N/C) circuits are not opened in the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Circuit For A Short</label> Table <xref format="dita" href="#i08790110/i08790110.16" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance reading for the (N/O) and (N/C) circuits greater than 5000 ohms. There is an open in one circuit. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790110/i08790110.19" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790110.16" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="120.48*"/>
            <colspec colname="col2" colwidth="47.39*"/>
            <colspec colname="col3" colwidth="151.82*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Circuit For A Short</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. The harness connectors for the switch and ECM remain disconnected.</para><?Pub _newline?><para>2. Remove the jumper wire that was installed in the previous test step.</para><?Pub _newline?><para>3. At the ECM machine harness connector, measure the resistance between the (N/O) contact and all the other contacts used in the ECM.</para><?Pub _newline?><para>4. At the ECM machine harness connector, measure the resistance between the (N/C) contact and all the other contacts used in the ECM.</para></entry>
            <entry><para>The resistance measurements are greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance measurements are greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Switch Ground Circuit</label> Table <xref format="dita" href="#i08790110/i08790110.17" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance is less than 5000 ohms. There is a short between the signal circuit and the circuit with the low-resistance measurement. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790110/i08790110.19" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790110.17" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="120.48*"/>
            <colspec colname="col2" colwidth="47.39*"/>
            <colspec colname="col3" colwidth="151.82*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Switch Ground Circuit</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. The key start switch and disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. The switch remains disconnected from the machine harness.</para><?Pub _newline?><para>3. Measure the resistance between the return contact on the harness to frame ground or return circuit.</para></entry>
            <entry><para>The resistance is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The ground circuit is correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Switch</label> Table <xref format="dita" href="#i08790110/i08790110.18" scope="local" type="table"></xref></para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance is greater than 5000 ohms. The ground circuit is open. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or corroded connection in the circuit. A resistance measurement greater than 5000 ohms indicates an open in the circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790110/i08790110.19" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790110.18" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="120.48*"/>
            <colspec colname="col2" colwidth="47.39*"/>
            <colspec colname="col3" colwidth="151.82*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Switch</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The disconnect switch and the key start switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. The switch remains disconnected from the machine harness.</para><?Pub _newline?><para>3. Measure the resistance between the normally open contact and the switch return or ground. Toggle the operation of the switch and observe resistance changes.</para><?Pub _newline?><para>4. Measure the resistance between the normally closed contact and the switch return or ground. Toggle the operation of the switch and observe resistance changes.</para></entry>
            <entry><para>Open resistance is greater than 5000 ohms. Closed resistance is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The measurements are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790110/i08790110.19" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more of the measurements was incorrect. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or corroded connection in the circuit. A resistance measurement greater than 5000 ohms indicates an open in the circuit.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the switch. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790110/i08790110.19" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790110.19" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="120.48*"/>
            <colspec colname="col2" colwidth="47.39*"/>
            <colspec colname="col3" colwidth="151.82*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i08790110.20">
            <title>FMI 4</title>
            <table frame="all" id="i08790110.21" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="120.56*"/>
            <colspec colname="col2" colwidth="47.42*"/>
            <colspec colname="col3" colwidth="151.91*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Harness For A Short</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><?Pub _cellfont Weight="medium"?><para>1. Turn the key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the machine harness connectors from the switch.</para><?Pub _newline?><para>3. Disconnect the machine harness connectors from the ECM.</para><?Pub _newline?><para>4. At the ECM machine harness connector, measure the resistance between the (N/O) contact and all the other contacts used in the ECM.</para><?Pub _newline?><para>5. At the ECM machine harness connector, measure the resistance between the (N/C) contact and all the other contacts used in the ECM.</para></entry>
            <entry><para>The resistance measurements are greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The resistance measurements are greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Switch</label> Table <xref format="dita" href="#i08790110/i08790110.22" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The resistance is less than 5000 ohms. There is a short between the signal circuit and the circuit with the low-resistance measurement.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or corroded connection in the circuit. A resistance measurement greater than 5000 ohms indicates an open in the circuit. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790110/i08790110.23" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790110.22" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="120.56*"/>
            <colspec colname="col2" colwidth="47.42*"/>
            <colspec colname="col3" colwidth="151.91*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check The Switch</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and the disconnect switch to the <position>OFF</position> position.</para><?Pub _newline?><para>2. Disconnect the switch from the machine harness.</para><?Pub _newline?><para>3. Measure the resistance between the normally open contact and the switch return or ground. Toggle the operation of the switch and observe resistance changes.</para><?Pub _newline?><para>4. Measure the resistance between the normally closed contact and the switch return or ground. Toggle the operation of the switch and observe resistance changes.</para></entry>
            <entry><para>Open resistance is greater than 5000 ohms. Closed resistance is less than 5 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The measurements are correct. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790110/i08790110.23" scope="local" type="table"></xref>...</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more of the measurements was incorrect.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or a corroded connection in the circuit. A resistance measurement greater than 5000 ohms indicates an open in the circuit.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the switch. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i08790110/i08790110.23" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i08790110.23" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
            <colspec colname="col1" colwidth="120.39*"/>
            <colspec colname="col2" colwidth="47.42*"/>
            <colspec colname="col3" colwidth="152.09*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="middle"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center" valign="middle"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center" valign="middle"><para>Values</para></entry>
            <entry align="center" valign="middle"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i08790110.1">
          <title>General Information</title>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the switch circuits of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each Electronic Control Module (ECM) on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The following diagram or diagrams are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i08790110.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i08790110.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt" dispwid="1524.00px"?>
            <colspec colname="COLSPEC1" colwidth="61.70*"/>
            <colspec colname="col2" colwidth="66.21*"/>
            <colspec colname="col3" colwidth="183.86*"/>
            <colspec colname="COLSPEC0" colwidth="200.24*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1" valign="top"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>J1939</para></entry>
            <entry align="center" valign="top"><para>CDL</para></entry>
            <entry align="center" valign="top"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center" valign="top"><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para><code>####-2</code></para></entry>
            <entry align="center" colname="col2"><para><code>####-2</code></para></entry>
            <entry colname="col3"><para><codedesc>####: Data Erratic, Intermittent, or Incorrect</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><?Pub _cellfont Weight="medium"?><para><code>####-3</code></para></entry>
            <entry align="center"><?Pub _cellfont Weight="medium"?><para><code>####-3</code></para></entry>
            <entry><para><codedesc>####: Voltage Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><?Pub _cellfont Weight="medium"?><para><code>####-4</code></para></entry>
            <entry align="center" colname="col2"><?Pub _cellfont Weight="medium"?><para><code>####-4</code></para></entry>
            <entry colname="col3"><para><codedesc>####: Voltage Below Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure figure-style="page-wide" id="i08790110.4">
            <graphic controlno="g03654624" href="x-wc://file=g03654624.cnv"/>
            <caption>
            <para>Schematic of the Switch Circuits</para>
            </caption>
            </figure>
            </sect>`;
          }
      
          let dtc = `<sect id="i08790110.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i08790110.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. Check the wiring for pinch points or abrasions. Look for and repair areas that indicate wires are exposed. If a problem with a connection is found, correct the problem and verify that this DTC is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i08790110.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i08790110.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script19() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const ecm = document.getElementById("ecm").value.replaceAll(" ","");
          const ecmTypes = ecm.split(",");
          const randFmi = [
            `<randitem>FMI <code>3</code>, proceed to <xref format="dita" href="#i09809247/i09809247.9" scope="local" type="sect"></xref>.</randitem>`,
            `<randitem>FMI <code>6</code>, proceed to <xref format="dita" href="#i09809247/i09809247.12" scope="local" type="sect"></xref>.</randitem>`
          ];
          const FMI = [
            `<sect id="i09809247.9">
            <title>FMI 3</title>
            <table frame="all" id="i09809247.10" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="134.55*"/>
            <colspec colname="col2" colwidth="52.92*"/>
            <colspec colname="col3" colwidth="169.53*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Machine Harness For A Short</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and the disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>2. Disconnect all harness connectors from the switch panel.</para><?Pub _newline?><para>3. Disconnect the wiper control module from the machine harness.</para><?Pub _newline?><para>4. At the switch panel, identify the wiper intermittent pin locations (refer to the schematic above).</para><?Pub _newline?><para>5. Measure the resistance between the wiper intermittent connectors on the switch panel and all other contacts of the switch panel.</para></entry>
            <entry><para>Each reading is greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> All measurements are greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Code Remains</label> Table <xref format="dita" href="#i09809247/i09809247.11" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> Resistance is less than 5 ohms. A short exists between the signal circuit and the circuit with the low-resistance measurement. <?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance greater than 5 ohms but less than 5000 ohms indicates a loose or corroded connection in the circuit. A resistance measurement greater than 5000 ohms indicates an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i09809247/i09809247.11" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i09809247.11" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="134.55*"/>
            <colspec colname="col2" colwidth="52.92*"/>
            <colspec colname="col3" colwidth="169.53*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>ON</position>.</para><?Pub _newline?><para>3. Clear all DTCs.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`,
            `<sect id="i09809247.12">
            <title>FMI 6</title>
            <table frame="all" id="i09809247.13" pgwide="1" tstbl="Y">
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="col1" colwidth="134.66*"/>
            <colspec colname="col2" colwidth="52.96*"/>
            <colspec colname="col3" colwidth="169.67*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Control Module</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Turn the key start switch and disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>2. Disconnect the wiper module from the machine harness.</para><?Pub _newline?><para>3. At the machine harness for the wiper module, place a jumper wire between one of the intermittent wiper delay signals and ground.</para></entry>
            <entry><para>The DTC is no longer active.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC is no longer active. <?Pub _newline?><?Pub _newline?>The wiper module has failed.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Replace the wiper control module.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC remains active. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check The Signal Circuit For A Short To Ground</label> Table <xref format="dita" href="#i09809247/i09809247.14" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i09809247.14" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="134.65*"/>
            <colspec colname="col2" colwidth="52.96*"/>
            <colspec colname="col3" colwidth="169.66*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check The Signal Circuit For A Short To Ground</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. The key start switch and disconnect switch remain in the <position>OFF</position> position.</para><?Pub _newline?><para>2. Remove the jumper wire that was installed in the previous test step.</para><?Pub _newline?><para>3. Disconnect all harness connections at switch panel.</para><?Pub _newline?><para>4. At the switch panel harness connector, measure the resistance between the signal contacts and all possible sources of ground.</para></entry>
            <entry><para>All resistance values are greater than 5000 ohms.</para></entry>
            <entry><para><emphasis>Result:</emphasis> All resistance values are greater than 5000 ohms. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i09809247/i09809247.15" scope="local" type="table"></xref>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more readings are less than 5 ohms.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> The short is between the signal contact and the circuit with the low resistance. Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?>Proceed to <label>Check If The Diagnostic Trouble Code Remains</label> Table <xref format="dita" href="#i09809247/i09809247.15" scope="local" type="table"></xref>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <table id="i09809247.15" pgwide="1" tstbl="Y">
            <?PubTbl table border-top-width="0.20pt"?>
            <tgroup cols="3">
            <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt" rth="0.20pt"?>
            <colspec colname="col1" colwidth="134.85*"/>
            <colspec colname="col2" colwidth="52.77*"/>
            <colspec colname="col3" colwidth="169.67*"/>
            <thead>
            <row>
            <entry align="center" nameend="col3" namest="col1" valign="top"><para>Check If The Diagnostic Trouble Code Remains</para></entry>
            </row>
            <row>
            <entry align="center"><para>Troubleshooting Test Steps</para></entry>
            <entry align="center"><para>Values</para></entry>
            <entry align="center"><para>Results</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry><para>1. Reconnect all harness connectors. Return machine to normal operating condition.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to the <position>ON</position> position.</para><?Pub _newline?><para>3. Clear all DTC.</para><?Pub _newline?><para>4. Operate the machine.</para><?Pub _newline?><para>5. Stop the machine and engage the safety lock lever.</para><?Pub _newline?><para>6. Check if the DTC is active.</para></entry>
            <entry><para>The DTC is no longer present.</para></entry>
            <entry><para><emphasis>Result:</emphasis> The DTC does not exist currently. The initial DTC may have been caused by poor electrical connection or short at one of the harness connections. Resume machine operation. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para><?Pub _newline?><para><emphasis>Result:</emphasis> The DTC has not been corrected. If the DTC has not been corrected after performing the procedure a second time, the ECM may require replacement. <?Pub _newline?><?Pub _newline?>Prior to replacing the ECM, always contact the Technical Communicator at the dealership for possible consultation with <trademark>Caterpillar</trademark>. This consultation may effect repair time. <?Pub _newline?><?Pub _newline?>Follow the steps in <pubref><pubtype>Troubleshooting</pubtype><ie-topic><pubtitle>ECM - Replace</pubtitle></ie-topic></pubref> if the ECM needs to be replaced. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis>.</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            </sect>`
          ]
          const genInfo = `<sect id="i09809247.1">
          <title>General Information</title>
          <para>The following table or tables are a list of Diagnostic Trouble Codes (DTCs) that are associated with the window wiper delay circuit of the machine. Each DTC is made up of two numbers. The first number is the Component Identifier (CID). The second number is the Failure Mode Identifier (FMI). Each Electronic Control Module (ECM) on a machine has an assigned Module Identifier (MID). For additional information, refer to <pubref><pubtype>Special Instruction</pubtype><media><formno>REHS0126</formno></media><pubtitle>Diagnostic Code Information for <trademark>Caterpillar</trademark> <supscrpt>&#xae;</supscrpt> Electronic Control</pubtitle></pubref>.</para>
          <para>The diagram or diagrams below are simplified schematics. The schematics are electrically correct. However, not all possible harness connectors are shown. Refer to the latest revision of the Electrical <pubref><pubtype>Schematic</pubtype></pubref> for a complete representation of all connections.</para>
          </sect>`;
      
          let ECM = "";
          for (i = 0; i < ecmTypes.length; i++) {
            ECM += `<sect id="i09809247.2">
            <title>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM</title>
            <table frame="all" id="i09809247.3" pgwide="1" srtbl="Y">
            <tgroup cols="4">
            <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
            <colspec colname="COLSPEC1" colwidth="58.68*"/>
            <colspec colname="col2" colwidth="63.32*"/>
            <colspec colname="col3" colwidth="184.60*"/>
            <colspec colname="COLSPEC0" colwidth="154.42*"/>
            <thead>
            <row>
            <entry align="center" nameend="COLSPEC0" namest="COLSPEC1" valign="top"><para>${ecmTypes[i].charAt(0).toUpperCase()+(ecmTypes[i].slice(1)).toLowerCase()} ECM (MID J1939 #### - CDL ####)</para></entry>
            </row>
            <row>
            <entry align="center" valign="top"><para>J1939</para></entry>
            <entry align="center" valign="top"><para>CDL</para></entry>
            <entry align="center" valign="top"><para>Diagnostic Trouble Code Description</para></entry>
            <entry align="center" valign="top"><?Pub _cellfont Weight="bold"?><?Pub _cellfont Weight="bold"?><para>System Response</para></entry>
            </row>
            </thead>
            <tbody>
            <row>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry align="center"><para><code>####-3</code></para></entry>
            <entry><para><codedesc>####: Voltage Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            <row>
            <entry align="center"><para><code>####-6</code></para></entry>
            <entry align="center"><para><code>####-6</code></para></entry>
            <entry><para><codedesc>####: Current Above Normal</codedesc></para></entry>
            <entry><para>####</para></entry>
            </row>
            </tbody>
            </tgroup>
            </table>
            <figure figure-style="page-wide" id="i09809247.4">
            <graphic controlno="g03653650" href="x-wc://file=g03653650.cnv"/>
            <caption>
            <para>Window Wiper Control Module Connections</para>
            </caption>
            </figure>
            </sect>`;
          }
      
          let dtc = `<sect id="i09809247.5">
          <title>Diagnostic Trouble Code Procedure</title>
          <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
          <table frame="all" id="i09809247.6" pgwide="1" tooltbl="Y">
          <tgroup cols="4">
          <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
          <colspec colname="col1" colwidth="0.49*"/>
          <colspec colname="col2" colwidth="0.92*"/>
          <colspec colname="col3" colwidth="1.99*"/>
          <colspec colname="col4" colwidth="0.62*"/>
          <thead>
          <row>
          <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
          </row>
          <row>
          <entry align="center" valign="top"><para>Tool</para></entry>
          <entry align="center" valign="top"><para>Part Number</para></entry>
          <entry align="center" valign="top"><para>Description</para></entry>
          <entry align="center" valign="top"><para>Qty</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
          <entry align="center"><para><partno>237-5130</partno></para></entry>
          <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-3224</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 7X-1710</partno></para></entry>
          <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"><para><partno> 8T-8726</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
          <entry align="center"><para>JERD2129</para></entry>
          <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center"></entry>
          <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row valign="middle">
          <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
          <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
          <entry align="center" colname="col4"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T3</para></entry>
          <entry align="center"><para><partno> 6V-4148</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T4</para></entry>
          <entry align="center"><para><partno>190-8900</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          <row>
          <entry align="center" valign="middle"><para>T5</para></entry>
          <entry align="center"><para><partno>175-3700</partno></para></entry>
          <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
          <entry align="center" valign="middle"><para>1</para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure.</para>
          <steplist>
          <step id="i09809247.7">
          <para>Identify the active FMI associated with the DTC.</para>
          </step>
          <step id="i09809247.8">
          <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
          </step>
          </steplist>
          <randlist>`;
          let randlist = [];
          for(i=0;i<checkedValues.length;i++){
            randlist+= randFmi[checkedValues[i]];
          }
      
          let sectFMI = [];
            for(i=0;i<checkedValues.length;i++){
                sectFMI+= FMI[checkedValues[i]];
            }
          output = genInfo+ECM+dtc+randlist+`</randlist>`+sectFMI+`</sect>`;
      
          navigator.clipboard.writeText(output);
      
      } 
      function script20() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const genInfo = `<para>An open circuit is a failure of an electrical circuit that results in no flow of electrical current. An open circuit can be caused by a broken wire within the circuit. Most often, an open circuit is caused by a poor connection. An open circuit can also be caused by a failed connection in one of the electrical connectors that is used in a circuit.</para>
          <para>The following procedure is a way to check for an open or a poor connection in a circuit.</para>
          <refer><para>For a complete electrical schematic, refer to Electrical <pubref><pubtype>Schematic</pubtype></pubref> for the machine that is being serviced.</para></refer>
          <sect id="i08790112.1">
          <title>Test For An Open Circuit</title>
          <table frame="all" id="i08790112.2" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="124*"/>
          <colspec colname="col2" colwidth="44*"/>
          <colspec colname="col3" colwidth="119*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1"><para>Identify Open Circuit</para></entry>
          </row>
          <row>
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry colname="col1"><para>1. Identify the connectors and the wire numbers of the suspect circuits. Use the <pubref><pubtype>Electrical System Schematic</pubtype></pubref> of the machine to identify the circuits.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch <position>OFF</position>.</para><?Pub _newline?><para>3. Disconnect the component and the Electronic Control Module (ECM) from the wiring harness.</para><?Pub _newline?><para>4. At one of the disconnected harness connections, place a jumper wire from the contact of the suspect wire to frame ground.</para><?Pub _newline?><para>5. At the other connector of the machine harness, use the multimeter probes to measure the resistance. Measure the resistance from the contact of the suspect wire to frame ground.</para></entry>
          <entry colname="col2"><para>The resistance is less than 5 ohms.</para></entry>
          <entry colname="col3"><para><emphasis>Result:</emphasis> All resistance readings are less than 5 ohms. The harness circuit is correct.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis></para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more of the resistances is greater than 5000 ohms. There is an open in the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness. <?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit. <?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis></para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          </sect>`;
          output = genInfo;
      
          navigator.clipboard.writeText(output);
      }
      function script21() {
        const checkboxes = document.querySelectorAll('input[name="fmi"]');      
        const checkedValues = [];
          // Iterate over each checkbox
          checkboxes.forEach(function(checkbox) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // If checked, add its value to the checkedValues array
                  checkedValues.push(checkbox.value);
              }
          });
          // Now checkedValues array contains the values of all checked checkboxes
          console.log(checkedValues);
          const genInfo = `<para>A short circuit is a failure of an electrical circuit that results in undesired electrical current. Usually, a short circuit is a bypass of the circuit across a load. A short across the wires in a circuit for a lamp produces too much current in the wires but no current at the lamp. The lamp is shorted out. The resistance in a normal circuit can vary, but the resistance between a particular circuit and other unrelated circuits is always greater than 5000 ohms. The following procedure explains the test for a short circuit:</para>
          <refer><para>For a complete electrical schematic, refer to Electrical <pubref><pubtype>Schematic</pubtype></pubref> for the machine that is being serviced.</para></refer>
          <sect id="i08790113.1">
          <title>Test For A Short Circuit</title>
          <table frame="all" id="i08790113.2" pgwide="1" tstbl="Y">
          <tgroup cols="3">
          <?PubTbl tgroup clmarg="2.0pt" crmarg="2.0pt"?>
          <colspec colname="col1" colwidth="116*"/>
          <colspec colname="col2" colwidth="43*"/>
          <colspec colname="col3" colwidth="132*"/>
          <thead>
          <row>
          <entry align="center" nameend="col3" namest="col1"><para>Identify Short Circuit</para></entry>
          </row>
          <row>
          <entry align="center"><para>Troubleshooting Test Steps</para></entry>
          <entry align="center"><para>Values</para></entry>
          <entry align="center"><para>Results</para></entry>
          </row>
          </thead>
          <tbody>
          <row>
          <entry colname="col1"><para>1. Identify the connectors and the wire numbers of the suspect circuits. Use the Electrical <pubref><pubtype>Schematic</pubtype></pubref> of the machine to identify the circuits.</para><?Pub _newline?><para>2. Turn the key start switch and the disconnect switch to <position>OFF</position>.</para><?Pub _newline?><para>3. Disconnect the component and the Electronic Control Module (ECM) from the wiring harness.</para><?Pub _newline?><para>4. At the machine harness connector for the ECM, place one of the multimeter probes on the contact of the  suspect wire.</para><?Pub _newline?><para>5. Use the other multimeter probe to check the resistance across all other contacts in the connectors of the ECM and frame ground.</para></entry>
          <entry colname="col2"><para>The resistance is greater than 5000 ohms for all the readings.</para></entry>
          <entry colname="col3"><para><emphasis>Result:</emphasis> All resistance readings are greater than 5000 ohms. The harness circuits are correct.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis></para><?Pub _newline?><para><emphasis>Result:</emphasis> One or more of the readings is less than 5 ohms. There is a short in the machine harness. The short is between the suspected wire and the wire with the lowest resistance measurement.<?Pub _newline?><?Pub _newline?><emphasis>Repair:</emphasis> Repair or replace the machine harness.<?Pub _newline?><?Pub _newline?><emphasis>Note:</emphasis> A resistance that is greater than 5 ohms but less than 5000 ohms would indicate a loose connection or a corroded connection in the circuit. A resistance measurement that is greater than 5000 ohms would indicate an open in the circuit.<?Pub _newline?><?Pub _newline?><emphasis>STOP</emphasis></para></entry>
          </row>
          </tbody>
          </tgroup>
          </table>
          </sect>`;
          output = genInfo;
      
          navigator.clipboard.writeText(output);
      }
    });
    $(".ssubmit button:nth-child(2)").click(function (e) {
      $("#form").trigger("reset");
    });
  });
  $(".bt:eq(12)").click(function () {
    $(".body").html(`<form id="form">
              <div class="tsg">
                  <div class="tsg-ref">
                  <label class="tsgtitle">IE Control Number</label>
                  <input id="userInput1" type="text" required placeholder="Enter IE Control Number" name="IE">
                  </div>
                  <div class="gtbType" id="container">
                      <div class="gtIetitle">Does your IE has "Check if Diagnostic"?</div>
                      <div class="yes">
                        <ul>
                          <li>
                            <label>Yes</label>
                            <input type="radio" name="YES" value="0">
                          </li>
                          <li>                          
                            <label>No</label>
                            <input type="radio" name="YES" value="1">
                          </li>
                        </ul>
                  </div>
                  </div>
                  <div class="tsgtextarea">
                  <label class="tsgtitle1">Paste XML</label>
                  <textarea required placeholder="Paste Old format" id="userInput"></textarea></div>
                  <div class="gtsubmit">
                  <button type="submit" onclick="window.electronAPI.updateEvent('Old to New')" id="btn">
                  <p id="btnText">Generate</p>
                  <div class="checked">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                      <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                    </svg>
                  </div>
                </button>            
                  <button class="bt1" type="reset">Clear</button>
                  </div>
              </div>
    </form>`);
    $("#form").submit(function (e) {
      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Copied";
      btn.classList.add("active");
      setTimeout(function () {
        btn.classList.remove("active");
        btnText.innerHTML = "Generate";
      }, 3 * 1000);
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      const radio = formProps.YES;
      console.log(typeof(radio));
      if(radio === "0"){
        script1();
      }else if(radio === "1"){
        script2();
      }
      function script1(){
            const text1 = document.getElementById("userInput").value;
            const text2 = document.getElementById("userInput1").value;
            const tbodyStartIndex = text1.indexOf("<tbody>");
            const tbodyEndIndex = text1.indexOf("</tbody>");


            // Extract the text between <tbody> and </tbody>
            const tbodyText = text1.substring(
              tbodyStartIndex + "<tbody>".length,
              tbodyEndIndex
            );
            const rowsArray = tbodyText.match(/<row>[\s\S]*?<\/row>/g); // Remove empty entries
            // .filter(entry => entry.trim() !== '')
            // const rowLength = rowsArray.length-1;
            let codeRemain = [rowsArray.pop()];
            // if(rowsArray[rowLength] === "Check If The Diagnostic Trouble Code Remains"){
            //     codeRemain = [rowsArray.pop()];
            // }else{
            //     codeRemain = [rowsArray];
            // }

            console.log(codeRemain);

            console.log(rowsArray); // Output the content between the second <row> and </row> tags
            // console.log(rowsArray[1]);
            // console.log(rowsArray[6]);
            // console.log(rowsArray[10]);
            // Define a function to check if a string contains a substring

            let trimmedArray = rowsArray.map((element) => {
              let startIndex = element.indexOf("<para>") + "<para>".length;
              let endIndex =
                element.indexOf("<?Pub _newline?>", startIndex) +
                "<?Pub _newline?>".length;
              return element.substring(endIndex);
            });

            console.log(trimmedArray);
            let trimmedArraycode = codeRemain.map((element) => {
              let startIndex = element.indexOf("<para>") + "<para>".length;
              let endIndex =
                element.indexOf("<?Pub _newline?>", startIndex) +
                "<?Pub _newline?>".length;
              return element.substring(endIndex);
            });

            console.log(trimmedArraycode);
            // function replaceTextWithNumberIgnoreCase(trimmedArray) {
            //     for (let i = 0; i < trimmedArray.length; i++) {
            //         trimmedArray[i] = trimmedArray[i].replace(/Proceed to Test Step \d+/gi, `Proceed to Table XXXXXX <xref format="dita" href="#./${text2}.${i}" scope="local" type="table"></xref>`);
            //     }
            //     return trimmedArray;
            // }

            // // Provided array
            // // Applying the function
            // providedArray = replaceTextWithNumberIgnoreCase(trimmedArray);
            // console.log(providedArray);

            const containsSubstring = (string, substring) => {
              return string.toLowerCase().includes(substring.toLowerCase());
            };

            // Initialize an array to store the results
            let separateArray = [];
            // Iterate over each element in the rowsArray
            rowsArray.forEach((row) => {
              // Check if the row contains "Begin Process"
              if (containsSubstring(row, "Begin Process")) {
                // If "Begin Process" is present, check for "FMI" in the same row
                if (containsSubstring(row, "FMI")) {
                  // If "FMI" is present, split the row by "FMI" and store the parts
                  const splitArray = row.split("FMI");
                  // Trim and push the parts into the separateArray
                  separateArray.push(
                    splitArray[1].trim().split(" ")[0].replace(/^0+/, "")
                  ); // Get the first word after "FMI"
                }
              }
            });

            // Output the separateArray
            console.log(separateArray);

            const emphasisArray = rowsArray.map(
              (row) => row.match(/<emphasis>(.*?)<\/emphasis>/)[1]
            );
            console.log(emphasisArray);
            const emphasisArraycode = codeRemain.map(
              (row) => row.match(/<emphasis>(.*?)<\/emphasis>/)[1]
            );
            console.log(emphasisArraycode);

            const newtrimArray = emphasisArray.map((item) => {
              if (item.startsWith("Begin Process")) {
                return emphasisArraycode[0];
              } else {
                return item;
              }
            });

            console.log(newtrimArray);

            let indices = [];

            for (let i = 0; i < rowsArray.length; i++) {
              if (rowsArray[i].includes("Begin Process")) {
                indices.push(i);
              }
            }
            console.log(indices);

            let filteredArray = newtrimArray.map((item) =>
              item.replace(/^\d+\.\s*/, "")
            );
            let filteredcodeRemain = emphasisArraycode.map((item) =>
              item.replace(/^\d+\.\s*/, "")
            );

            console.log(filteredArray);
            let filteredcodeRemaintext = filteredcodeRemain[0];
            console.log(filteredcodeRemaintext);
            let finalConcat = filteredArray.push(filteredcodeRemain[0]);
            console.log(filteredcodeRemain[0]);

            console.log(finalConcat[5]);

            let result = [];

            for (let i = 0; i < indices.length - 1; i++) {
              let start = indices[i] + 1;
              let end = indices[i + 1];
              let pairValue = "";

              for (let j = start; j < end; j++) {
                pairValue += rowsArray[j];
              }

              result.push(pairValue);
            }

            // Concatenate the remaining values after the last pair of indices
            let lastStart = indices[indices.length - 1] + 1;
            let remainingValue = "";
            for (let k = lastStart; k < rowsArray.length; k++) {
              remainingValue += rowsArray[k];
            }

            result.push(remainingValue);
            console.log(result);
            let filteredRowsArray = rowsArray.map((row) => {
              let rowText = row;
              emphasisArray.forEach((emphasis) => {
                if (row.includes(emphasis)) {
                  rowText = rowText.replace(
                    `<emphasis><para>${emphasis}</para></emphasis>`,
                    ""
                  );
                }
              });
              return rowText;
            });

            console.log(filteredRowsArray);

            const resultArray = [];

            for (let i = 0; i < indices.length; i++) {
              const start = indices[i];
              let end;

              if (i === indices.length - 1) {
                end = filteredRowsArray.length;
                console.log(end);
              } else {
                end = indices[i + 1];
              }

              const range = [];

              for (let j = start + 1; j < end; j++) {
                range.push(j);
              }
              if (range.length > 0) {
                resultArray.push(range);
              }
            }

            console.log(resultArray);

            let output = "";
            const sectionStart = `<sect id="${text2}.0">
              <title>Diagnostic Trouble Code Procedure</title>
              <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
              <table frame="all" id="${text2}.6" pgwide="1" tooltbl="Y">
              <tgroup cols="4">
              <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
              <colspec colname="col1" colwidth="0.49*"/>
              <colspec colname="col2" colwidth="0.92*"/>
              <colspec colname="col3" colwidth="1.99*"/>
              <colspec colname="col4" colwidth="0.62*"/>
              <thead>
              <row>
              <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
              </row>
              <row>
              <entry align="center" valign="top"><para>Tool</para></entry>
              <entry align="center" valign="top"><para>Part Number</para></entry>
              <entry align="center" valign="top"><para>Description</para></entry>
              <entry align="center" valign="top"><para>Qty</para></entry>
              </row>
              </thead>
              <tbody>
              <row>
              <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
              <entry align="center"><para><partno>237-5130</partno></para></entry>
              <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center"><para><partno> 8T-3224</partno></para></entry>
              <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center"><para><partno> 7X-1710</partno></para></entry>
              <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center"><para><partno> 8T-8726</partno></para></entry>
              <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
              <entry align="center"><para>JERD2129</para></entry>
              <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center"></entry>
              <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row valign="middle">
              <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
              <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
              <entry align="center" colname="col4"><para>1</para></entry>
              </row>
              <row>
              <entry align="center" valign="middle"><para>T3</para></entry>
              <entry align="center"><para><partno> 6V-4148</partno></para></entry>
              <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center" valign="middle"><para>T4</para></entry>
              <entry align="center"><para><partno>190-8900</partno></para></entry>
              <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center" valign="middle"><para>T5</para></entry>
              <entry align="center"><para><partno>175-3700</partno></para></entry>
              <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              </tbody>
              </tgroup>
              </table>
              <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. Check the wiring harness for pinch points or abrasions. Look for and repair areas that indicate wires are exposed. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure.</para>
              <steplist>
              <step id="${text2}.7">
              <para>Identify the active FMI associated with the DTC.</para>
              </step>
              <step id="${text2}.8">
              <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
              </step>
              </steplist><randlist>`;
            let randList = "";
            for (let i = 0; i < separateArray.length; i++) {
              const randFMI = `<randitem>FMI <code>${
                separateArray[i]
              }</code> , proceed to <xref format="dita" href="#${text2}/${text2}.${
                i + 1
              }" scope="local" type="sect"></xref>.</randitem>`;
              randList += randFMI;
            }
            const sectionEnd = `</randlist></sect>`;
            for (let index = 0; index < separateArray.length; index++) {
              const sectionFmi = `<sect id="${text2}.${index + 1}"><title>FMI ${
                separateArray[index]
              }</title>`;
              // console.log(result[i]);
              // let backPortion = result[index];
              // console.log(backPortion);
              let textValue = "";

              if (index < resultArray.length) {
                let subArray = resultArray[index];
                console.log(resultArray[index]);
                for (let j = 0; j < subArray.length; j++) {
                  let subIndex = subArray[j];
                  if (subIndex < filteredArray.length) {
                    textValue += `<table frame="all" id="${text2}.${j}" pgwide="1">
                              <tgroup cols="3">
                              <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
                              <colspec colname="col1"/>
                              <colspec colname="col2"/>
                              <colspec colname="col3"/>
                              <thead><row>
                              <entry align="center" nameend="col3" namest="col1" valign="top"><para>${
                                filteredArray[subIndex]
                              }</para></entry>
                              </row>
                              <row>
                              <entry align="center" valign="top"><para>Troubleshooting Test Steps</para></entry>
                              <entry align="center" valign="top"><para>Values</para></entry>
                              <entry align="center" valign="top"><para>Results</para></entry>
                              </row>
                              </thead>
                              <tbody><row><entry>${trimmedArray[subIndex].replace(
                                /Proceed to Test Step \d+/gi,
                                `Proceed to <label>XXXXXXXXXXXXXX</label> Table XXXXXX `
                              )}</tbody></tgroup> 
                              </table>`;
                  }
                }
                textValue += `<table frame="all" id="${text2}.${index}" pgwide="1">
                      <tgroup cols="3">
                      <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
                      <colspec colname="col1"/>
                      <colspec colname="col2"/>
                      <colspec colname="col3"/>
                      <thead><row>
                      <entry align="center" nameend="col3" namest="col1" valign="top"><para>${filteredcodeRemain[0]}</para></entry>
                      </row>
                      <row>
                      <entry align="center" valign="top"><para>Troubleshooting Test Steps</para></entry>
                      <entry align="center" valign="top"><para>Values</para></entry>
                      <entry align="center" valign="top"><para>Results</para></entry>
                      </row>
                      </thead>
                      <tbody><row><entry>${trimmedArraycode[0]}</tbody></tgroup> 
                      </table>`;
              }
              // <xref format="dita" href="#./${text2}.${subIndex}" scope="local" type="table"></xref>
              output = output + sectionFmi + textValue + `</sect>`;
            }
            console.log(sectionStart + output + sectionEnd);
            finalOutput = sectionStart + randList + sectionEnd + output;
            replaceOk = finalOutput.replace(
              /(?:OK|NOT OK|YES|NO)[(:\- )]?/g,
              "Result:"
            );
            var replacedStr = replaceOk.replace(/<para>([A-Z])\.\s*/g, function(match, alphabet) {
                var alphabetPosition = alphabet.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
                return "<para>" + alphabetPosition + ". ";
            });
            
            console.log(replacedStr);

            navigator.clipboard.writeText(replacedStr);
      }
      function script2(){
            const text1 = document.getElementById("userInput").value;
            const text2 = document.getElementById("userInput1").value;
            const tbodyStartIndex = text1.indexOf("<tbody>");
            const tbodyEndIndex = text1.indexOf("</tbody>");


            // Extract the text between <tbody> and </tbody>
            const tbodyText = text1.substring(
              tbodyStartIndex + "<tbody>".length,
              tbodyEndIndex
            );
            const rowsArray = tbodyText.match(/<row>[\s\S]*?<\/row>/g); // Remove empty entries
            // .filter(entry => entry.trim() !== '')
            // const rowLength = rowsArray.length-1;
            let codeRemain = [rowsArray.pop()];
            // if(rowsArray[rowLength] === "Check If The Diagnostic Trouble Code Remains"){
            //     codeRemain = [rowsArray.pop()];
            // }else{
            //     codeRemain = [rowsArray];
            // }

            console.log(codeRemain);

            console.log(rowsArray); // Output the content between the second <row> and </row> tags
            // console.log(rowsArray[1]);
            // console.log(rowsArray[6]);
            // console.log(rowsArray[10]);
            // Define a function to check if a string contains a substring

            let trimmedArray = rowsArray.map((element) => {
              let startIndex = element.indexOf("<para>") + "<para>".length;
              let endIndex =
                element.indexOf("<?Pub _newline?>", startIndex) +
                "<?Pub _newline?>".length;
              return element.substring(endIndex);
            });

            console.log(trimmedArray);
            let trimmedArraycode = codeRemain.map((element) => {
              let startIndex = element.indexOf("<para>") + "<para>".length;
              let endIndex =
                element.indexOf("<?Pub _newline?>", startIndex) +
                "<?Pub _newline?>".length;
              return element.substring(endIndex);
            });

            console.log(trimmedArraycode);
            // function replaceTextWithNumberIgnoreCase(trimmedArray) {
            //     for (let i = 0; i < trimmedArray.length; i++) {
            //         trimmedArray[i] = trimmedArray[i].replace(/Proceed to Test Step \d+/gi, `Proceed to Table XXXXXX <xref format="dita" href="#./${text2}.${i}" scope="local" type="table"></xref>`);
            //     }
            //     return trimmedArray;
            // }

            // // Provided array
            // // Applying the function
            // providedArray = replaceTextWithNumberIgnoreCase(trimmedArray);
            // console.log(providedArray);

            const containsSubstring = (string, substring) => {
              return string.toLowerCase().includes(substring.toLowerCase());
            };

            // Initialize an array to store the results
            let separateArray = [];
            // Iterate over each element in the rowsArray
            rowsArray.forEach((row) => {
              // Check if the row contains "Begin Process"
              if (containsSubstring(row, "Begin Process")) {
                // If "Begin Process" is present, check for "FMI" in the same row
                if (containsSubstring(row, "FMI")) {
                  // If "FMI" is present, split the row by "FMI" and store the parts
                  const splitArray = row.split("FMI");
                  // Trim and push the parts into the separateArray
                  separateArray.push(
                    splitArray[1].trim().split(" ")[0].replace(/^0+/, "")
                  ); // Get the first word after "FMI"
                }
              }
            });

            // Output the separateArray
            console.log(separateArray);

            const emphasisArray = rowsArray.map(
              (row) => row.match(/<emphasis>(.*?)<\/emphasis>/)[1]
            );
            console.log(emphasisArray);
            const emphasisArraycode = codeRemain.map(
              (row) => row.match(/<emphasis>(.*?)<\/emphasis>/)[1]
            );
            console.log(emphasisArraycode);

            const newtrimArray = emphasisArray.map((item) => {
              if (item.startsWith("Begin Process")) {
                return emphasisArraycode[0];
              } else {
                return item;
              }
            });

            console.log(newtrimArray);

            let indices = [];

            for (let i = 0; i < rowsArray.length; i++) {
              if (rowsArray[i].includes("Begin Process")) {
                indices.push(i);
              }
            }
            console.log(indices);

            let filteredArray = newtrimArray.map((item) =>
              item.replace(/^\d+\.\s*/, "")
            );
            let filteredcodeRemain = emphasisArraycode.map((item) =>
              item.replace(/^\d+\.\s*/, "")
            );

            console.log(filteredArray);
            let filteredcodeRemaintext = filteredcodeRemain[0];
            console.log(filteredcodeRemaintext);
            let finalConcat = filteredArray.push(filteredcodeRemain[0]);
            console.log(filteredcodeRemain[0]);

            console.log(finalConcat[5]);

            let result = [];

            for (let i = 0; i < indices.length - 1; i++) {
              let start = indices[i] + 1;
              let end = indices[i + 1];
              let pairValue = "";

              for (let j = start; j < end; j++) {
                pairValue += rowsArray[j];
              }

              result.push(pairValue);
            }

            // Concatenate the remaining values after the last pair of indices
            let lastStart = indices[indices.length - 1] + 1;
            let remainingValue = "";
            for (let k = lastStart; k < rowsArray.length; k++) {
              remainingValue += rowsArray[k];
            }

            result.push(remainingValue);
            console.log(result);
            let filteredRowsArray = rowsArray.map((row) => {
              let rowText = row;
              emphasisArray.forEach((emphasis) => {
                if (row.includes(emphasis)) {
                  rowText = rowText.replace(
                    `<emphasis><para>${emphasis}</para></emphasis>`,
                    ""
                  );
                }
              });
              return rowText;
            });

            console.log(filteredRowsArray);

            const resultArray = [];

            for (let i = 0; i < indices.length; i++) {
              const start = indices[i];
              let end;

              if (i === indices.length - 1) {
                end = filteredRowsArray.length;
                console.log(end);
              } else {
                end = indices[i + 1];
              }

              const range = [];

              for (let j = start + 1; j < end; j++) {
                range.push(j);
              }
              if (range.length > 0) {
                resultArray.push(range);
              }
            }

            console.log(resultArray);

            let output = "";
            const sectionStart = `<sect id="${text2}.0">
              <title>Diagnostic Trouble Code Procedure</title>
              <!--Cut out the tools that aren't necessary for your troubleshooting steps. Ensure the p/n's are still current and match your Service Tools IE.-->
              <table frame="all" id="${text2}.6" pgwide="1" tooltbl="Y">
              <tgroup cols="4">
              <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
              <colspec colname="col1" colwidth="0.49*"/>
              <colspec colname="col2" colwidth="0.92*"/>
              <colspec colname="col3" colwidth="1.99*"/>
              <colspec colname="col4" colwidth="0.62*"/>
              <thead>
              <row>
              <entry align="center" nameend="col4" namest="col1" valign="top"><para>Required Tools</para></entry>
              </row>
              <row>
              <entry align="center" valign="top"><para>Tool</para></entry>
              <entry align="center" valign="top"><para>Part Number</para></entry>
              <entry align="center" valign="top"><para>Description</para></entry>
              <entry align="center" valign="top"><para>Qty</para></entry>
              </row>
              </thead>
              <tbody>
              <row>
              <entry align="center" morerows="3" valign="middle"><para>T1</para></entry>
              <entry align="center"><para><partno>237-5130</partno></para></entry>
              <entry align="center" valign="middle"><para>Digital Multimeter Group</para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center"><para><partno> 8T-3224</partno></para></entry>
              <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><cpn>Needle Tip Group</cpn></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center"><para><partno> 7X-1710</partno></para></entry>
              <entry align="center" valign="middle"><?Pub _cellfont Weight="medium"?><para><cpn>Multimeter Probe Group</cpn></para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center"><para><partno> 8T-8726</partno></para></entry>
              <entry align="center" valign="middle"><para><cpn>Cable Assembly (Three Pin)</cpn> <cpnmod>3-Pin Breakout</cpnmod></para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center" morerows="2" valign="middle"><para>T2</para></entry>
              <entry align="center"><para>JERD2129</para></entry>
              <entry align="center" valign="middle"><para><trademark>Cat</trademark><supscrpt>&#xae;</supscrpt> Electronic Technician (ET)</para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center"></entry>
              <entry align="center" valign="middle"><para>Windows-based PC</para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row valign="middle">
              <entry align="center" colname="col2"><para><partno>538-5051</partno></para></entry>
              <entry align="center" colname="col3"><para><cpn>Communication Adapter Gp</cpn></para></entry>
              <entry align="center" colname="col4"><para>1</para></entry>
              </row>
              <row>
              <entry align="center" valign="middle"><para>T3</para></entry>
              <entry align="center"><para><partno> 6V-4148</partno></para></entry>
              <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpnmod><trademark>Sure Seal</trademark></cpnmod></para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center" valign="middle"><para>T4</para></entry>
              <entry align="center"><para><partno>190-8900</partno></para></entry>
              <entry align="center" valign="middle"><para><cpn>Connector Field Repair Kit</cpn> <cpnmod><propname>Deutsch</propname></cpnmod></para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              <row>
              <entry align="center" valign="middle"><para>T5</para></entry>
              <entry align="center"><para><partno>175-3700</partno></para></entry>
              <entry align="center" valign="middle"><para><cpn>Connector Repair Kit</cpn> <cpn><propname>Deutsch</propname> DT</cpn></para></entry>
              <entry align="center" valign="middle"><para>1</para></entry>
              </row>
              </tbody>
              </tgroup>
              </table>
              <para>Prior to beginning this procedure, inspect the harness connectors that are involved in this circuit. Poor connections can often be the cause of a problem in an electrical circuit. Verify that all connections in the circuit are clean, secure, and in good condition. Check the wiring harness for pinch points or abrasions. Look for and repair areas that indicate wires are exposed. If a problem with a connection is found, correct the problem and verify that the DTC is active before performing a troubleshooting procedure.</para>
              <steplist>
              <step id="${text2}.7">
              <para>Identify the active FMI associated with the DTC.</para>
              </step>
              <step id="${text2}.8">
              <para>After determining which FMI is present, use the list below to determine which procedure to follow:</para>
              </step>
              </steplist><randlist>`;
            let randList = "";
            for (let i = 0; i < separateArray.length; i++) {
              const randFMI = `<randitem>FMI <code>${
                separateArray[i]
              }</code> , proceed to <xref format="dita" href="#${text2}/${text2}.${
                i + 1
              }" scope="local" type="sect"></xref>.</randitem>`;
              randList += randFMI;
            }
            const sectionEnd = `</randlist></sect>`;
            for (let index = 0; index < separateArray.length; index++) {
              const sectionFmi = `<sect id="${text2}.${index + 1}"><title>FMI ${
                separateArray[index]
              }</title>`;
              // console.log(result[i]);
              // let backPortion = result[index];
              // console.log(backPortion);
              let textValue = "";

              if (index < resultArray.length) {
                let subArray = resultArray[index];
                console.log(resultArray[index]);
                for (let j = 0; j < subArray.length; j++) {
                  let subIndex = subArray[j];
                  if (subIndex < filteredArray.length) {
                    textValue += `<table frame="all" id="${text2}.${j}" pgwide="1">
                              <tgroup cols="3">
                              <?PubTbl tgroup clmarg="2.00pt" crmarg="2.00pt"?>
                              <colspec colname="col1"/>
                              <colspec colname="col2"/>
                              <colspec colname="col3"/>
                              <thead><row>
                              <entry align="center" nameend="col3" namest="col1" valign="top"><para>${
                                filteredArray[subIndex]
                              }</para></entry>
                              </row>
                              <row>
                              <entry align="center" valign="top"><para>Troubleshooting Test Steps</para></entry>
                              <entry align="center" valign="top"><para>Values</para></entry>
                              <entry align="center" valign="top"><para>Results</para></entry>
                              </row>
                              </thead>
                              <tbody><row><entry>${trimmedArray[subIndex].replace(
                                /Proceed to Test Step \d+/gi,
                                `Proceed to <label>XXXXXXXXXXXXXX</label> Table XXXXXX `
                              )}</tbody></tgroup> 
                              </table>`;
                  }
                }
              }
              // <xref format="dita" href="#./${text2}.${subIndex}" scope="local" type="table"></xref>
              output = output + sectionFmi + textValue + `</sect>`;
            }
            console.log(sectionStart + output + sectionEnd);
            finalOutput = sectionStart + randList + sectionEnd + output;
            replaceOk = finalOutput.replace(
              /(?:OK|NOT OK|YES|NO)[(:\- )]?/g,
              "Result:"
            );
            var replacedStr = replaceOk.replace(/<para>([A-Z])\.\s*/g, function(match, alphabet) {
                var alphabetPosition = alphabet.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
                return "<para>" + alphabetPosition + ". ";
            });
            
            console.log(replacedStr);

            navigator.clipboard.writeText(replacedStr);
      }
    });
    $(".ssubmit button:nth-child(2)").click(function (e) {
      $("#form").trigger("reset");
    });
  });
});

'use strict';

var сountries = [
  {
    name: 'Switzerland',
    value: 'CH'
  },
  {
    name: 'Austria',
    value: 'AT'
  },
  {
    name: 'Germany',
    value: 'DE'
  }
];

var testData = {
  companyName: 'Audienzz AG',
  firstName: 'test',
  secondName: 'test',
  email: 'test@email',
  street: 'test',
  zip: 'test',
  city: 'Kiev',
  countryCode: 'UA',
  password: 'test',
  repeatedPassword: 'test'
}

window.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('#sb_marketing_form'),
      countriesSelect = form.querySelector('select[name="countryCode"]'),
      initCaptcha = function() {
        createCaptcha(form.querySelector('#captcha'));
      },
      captchaValue;

      setCountries(countriesSelect, сountries);
      initCaptcha();

  var constraints = {
      companyName: {
        presence: {
          message: '^Please enter company name'
        }
      },
      firstName: {
        presence: {
          message: '^Please enter first name'
        }
      },
      secondName: {
        presence: {
          message: '^Please enter surname'
        }
      },
      email: {
        presence: {
          message: '^Please enter email'
        },
        email: true
      },
      street: {
        presence: {
          message: '^Please enter address'
        }
      },
      zip: {
        presence: {
          message: '^Please enter postcode'
        },
        format: {
          pattern: '\\d{5}'
        }
      },
      city: {
        presence: {
          message: '^Please enter city'
        }
      },
      password: {
        presence: {
          message: '^Please enter password'
        },
        length: {
          minimum: 5
        }
      },
      repeatedPassword: {
        presence: {
          message: '^Please enter repeated password'
        },
        equality: {
          attribute: 'password',
          message: '^Passwords do not match'
        }
      },
      sb_terms: {
        presence: {
          message: '^Please accept the T&Cs'
        },
        inclusion: {
          within: [true],
          message: '^Please accept the T&Cs'
        }
      },
      captcha: {
        presence: {
          message: '^Please enter captcha'
        },
        inclusion: {
          within: [captchaValue],
          message: '^Captcha is not correct'
        }
      }
    };

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    handleFormSubmit(this);
  });

  var inputs = form.querySelectorAll('[data-required] input[name], [data-required] select[name]');
  for (var i = 0; i < inputs.length; ++i) {
    inputs.item(i).addEventListener('input', function() {
      var errors = validate(form, constraints) || {};
      showErrorsForInput(this, errors[this.name])
    });
  }

  function handleFormSubmit(form) {
    var errors = validate(form, constraints);

    showErrors(inputs, errors || {});

    if (!errors) {
      showSuccess(form);
    }
  }

  function showErrors(inputs, errors) {
    inputs.forEach(function(input) {
      showErrorsForInput(input, errors && errors[input.name]);
    });
  }

  function showErrorsForInput(input, errors) {
    var formGroup = closestParent(input.parentNode, 'form-group'), 
        messages = formGroup.querySelector('.messages');
    
    resetFormGroup(formGroup);
    
    if (errors) {
      formGroup.classList.add('has-error');
      errors.forEach(function(error) {
        addError(messages, error);
      });
    } else {
      formGroup.classList.add('has-success');
    }
  }

  function closestParent(child, className) {
    if (!child || child == document) {
      return null;
    }
    if (child.classList.contains(className)) {
      return child;
    } else {
      return closestParent(child.parentNode, className);
    }
  }

  function resetFormGroup(formGroup) {
    formGroup.classList.remove('has-error');
    formGroup.classList.remove('has-success');
    formGroup.querySelectorAll('.help-block.error').forEach(function(el) {
      el.parentNode.removeChild(el);
    });
  }

  function addError(messages, error) {
    var block = document.createElement('span');
    block.classList.add('help-block');
    block.classList.add('error');
    block.innerText = error;
    messages.appendChild(block);
  }

  function showSuccess(form) {
    console.log(getFormData(form));
    postAjax('https://dev-api.adconsole.ch/api/ws-businessclick-creation/sb-promo', getFormData(form), function(response) {
      console.log(response);
      form.reset();
      initCaptcha();
    });
  }

  function getFormData(form) {
    var data = {};

    for (var key of form.elements) {
      if (key.type && key.type !== 'submit' && key.type !== 'checkbox' && key.name !== 'captcha') {
        if (key.value !== '') {
          data[key.name] = key.value;
        }
      }
    }
  
    return JSON.stringify(data);
  }
  
  function setCountries(selectEl, dataArr) {
    var options = '';
  
    for (var i = 0; i < dataArr.length; i++) {
      options += '<option value="' + dataArr[i].value + '">' + dataArr[i].name + '</option>';
    }
  
    selectEl.innerHTML = options;
  }
  
  function postAjax(url, data, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState > 3 && xhr.status == 200) { 
          success(xhr.responseText); 
        } else {
          alert('Something went wrong (' + xhr.status + ')');
        }
    };
  
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
  
    return xhr;
  }
  
  function createCaptcha(element) {
    element.innerHTML = '';
  
    var charsArray = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lengthOtp = 6;
    var captcha = [];
  
    for (var i = 0; i < lengthOtp; i++) {
      var index = Math.floor(Math.random() * charsArray.length + 1);
  
      if (captcha.indexOf(charsArray[index]) === -1) {
        captcha.push(charsArray[index]);
      } else {
        i--;
      }
    }
  
    var canv = document.createElement('canvas');
  
    canv.id = 'captchaCanv';
    canv.width = 120;
    canv.height = 40;
  
    var ctx = canv.getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, canv.width, 0);

    gradient.addColorStop('0', '#4A4A4A');
    gradient.addColorStop('0.5', '#f90');
    gradient.addColorStop('1.0', '#363a3b');
  
    ctx.font = '25px Georgia';
    ctx.strokeStyle = gradient;
    ctx.strokeText(captcha.join(''), 0, 30);
  
    captchaValue = captcha.join('');
    element.appendChild(canv);
  }
});
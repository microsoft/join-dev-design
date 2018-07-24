"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step("next", value);
            },
            function(err) {
              step("throw", err);
            }
          );
        }
      }
      return step("next");
    });
  };
}

var timeTravel = (function() {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
      var DisplayCount,
        getPullRequests,
        getEl,
        $buttonFirst,
        $buttonNext,
        $buttonPrevious,
        $buttonLast,
        $display,
        $historyId,
        $historyMax,
        $prTitle,
        $prAuthor,
        $prAuthorAvatar,
        $prEditor,
        $prEditorAvatar,
        $prMergedAt,
        $prUrl,
        updateDisplay,
        updateHashURL,
        updateView,
        pullRequests,
        count,
        getHashCount;
      return regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                DisplayCount = (function() {
                  function DisplayCount() {
                    var length =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : 0;

                    _classCallCheck(this, DisplayCount);

                    this.max = length - 1;
                    this.count = this.max;
                  }

                  _createClass(DisplayCount, [
                    {
                      key: "validate",
                      value: function validate(v) {
                        var parsedV = parseInt(v, 10);
                        if (isNaN(parsedV)) {
                          console.warn(
                            "DisplayCount: invalid value (" +
                              v +
                              " has to be a finite number.)"
                          );
                          return this.max;
                        }
                        return parsedV;
                      }
                    },
                    {
                      key: "reset",
                      value: function reset() {
                        this.count = 0;
                        return this.count;
                      }
                    },
                    {
                      key: "maximize",
                      value: function maximize() {
                        this.count = this.max;
                        return this.count;
                      }
                    },
                    {
                      key: "limit",
                      value: function limit(v) {
                        v = this.validate(v);
                        if (v > this.max) v = this.max;
                        if (v < 0) v = 0;
                        return v;
                      }
                    },
                    {
                      key: "add",
                      value: function add() {
                        var v =
                          arguments.length > 0 && arguments[0] !== undefined
                            ? arguments[0]
                            : 0;

                        v = this.validate(v);
                        this.count = this.limit(this.count + v);
                        return this.count;
                      }
                    },
                    {
                      key: "jumpTo",
                      value: function jumpTo(v) {
                        v = this.validate(v);
                        this.count = this.limit(v);
                        return this.count;
                      }
                    }
                  ]);

                  return DisplayCount;
                })();

                getPullRequests = function getPullRequests() {
                  return fetch("./index.json")
                    .then(function(res) {
                      return res.json();
                    })
                    .then(function(res) {
                      return res.data.repository.pullRequests.edges;
                    })
                    .catch(function(err) {
                      return console.warn(err);
                    });
                };

                getEl = function getEl(id) {
                  return document.getElementById(id);
                };

                $buttonFirst = getEl("js-button-first");
                $buttonNext = getEl("js-button-next");
                $buttonPrevious = getEl("js-button-previous");
                $buttonLast = getEl("js-button-last");
                $display = getEl("js-display");
                $historyId = getEl("js-history-id");
                $historyMax = getEl("js-history-max");
                $prTitle = getEl("js-pr-title");
                $prAuthor = getEl("js-pr-author");
                $prAuthorAvatar = getEl("js-pr-author-avatar");
                $prEditor = getEl("js-pr-editor");
                $prEditorAvatar = getEl("js-pr-editor-avatar");
                $prMergedAt = getEl("js-pr-mergedAt");
                $prUrl = getEl("js-pr-url");

                updateDisplay = function updateDisplay(count) {
                  var pr = pullRequests[count];
                  var _pr$node = pr.node,
                    id = _pr$node.id,
                    title = _pr$node.title,
                    author = _pr$node.author,
                    editor = _pr$node.editor,
                    mergedAt = _pr$node.mergedAt,
                    url = _pr$node.url;

                  // https://stackoverflow.com/a/2257295

                  $display.contentWindow.location.replace(
                    "./history/" + id + "/docs/"
                  );

                  $historyId.textContent = count + 1;
                  $prTitle.textContent = title;

                  $prAuthor.textContent = author.login;
                  $prAuthorAvatar.src = author.avatarUrl;
                  $prAuthorAvatar.setAttribute(
                    "alt",
                    "Author: " + author.login
                  );

                  if (editor) {
                    $prEditor.textContent = editor && editor.login;
                    $prEditorAvatar.src = editor.avatarUrl;
                    $prAuthorAvatar.setAttribute(
                      "alt",
                      "Author: " + author.login
                    );
                  } else {
                    $prEditor.textContent = "No editor";
                    $prEditorAvatar.src = "";
                    $prAuthorAvatar.setAttribute("alt", "No editor");
                  }

                  $prMergedAt.textContent = "Merged at " + mergedAt;
                  $prUrl.href = url;
                };

                updateHashURL = function updateHashURL(hash) {
                  window.history.pushState(null, null, "#" + (hash + 1));
                };

                updateView = function updateView(currentCount) {
                  updateHashURL(currentCount);
                  updateDisplay(currentCount);
                };

                _context.next = 22;
                return getPullRequests();

              case 22:
                pullRequests = _context.sent;
                count = new DisplayCount(pullRequests.length);

                // get hash link

                getHashCount = function getHashCount() {
                  if (window.location.hash)
                    return window.location.hash.split("#")[1];
                  return null;
                };
                // pop back

                window.onpopstate = function() {
                  console.log("state popped: " + window.location.hash);
                  updateDisplay(count.jumpTo(getHashCount()));
                };

                // start
                $historyMax.textContent = count.max + 1;
                updateView(count.jumpTo(getHashCount()));

                // button control
                $buttonFirst.onclick = function() {
                  updateView(count.reset());
                };
                $buttonNext.onclick = function() {
                  updateView(count.add(1));
                };
                $buttonPrevious.onclick = function() {
                  updateView(count.add(-1));
                };
                $buttonLast.onclick = function() {
                  updateView(count.maximize());
                };

              case 32:
              case "end":
                return _context.stop();
            }
          }
        },
        _callee,
        undefined
      );
    })
  );

  return function timeTravel() {
    return _ref.apply(this, arguments);
  };
})();

window.onload = timeTravel;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUEwQixZQUFNO0FBQzlCLHlCQUFXLE1BQU0sR0FBTixDQUFVLENBQUMsQ0FBWCxDQUFYO0FBQ0QsYUFGRDtBQUdBLHdCQUFZLE9BQVosR0FBc0IsWUFBTTtBQUMxQix5QkFBVyxNQUFNLFFBQU4sRUFBWDtBQUNELGFBRkQ7O0FBcElpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBeUlBLE9BQU8sTUFBUCxHQUFnQixVQUFoQiIsImZpbGUiOiJ0aW1lLXRyYXZlbC1jb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRpbWVUcmF2ZWwgPSBhc3luYyAoKSA9PiB7XG4gIGNsYXNzIERpc3BsYXlDb3VudCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoID0gMCkge1xuICAgICAgdGhpcy5tYXggPSBsZW5ndGggLSAxO1xuICAgICAgdGhpcy5jb3VudCA9IHRoaXMubWF4O1xuICAgIH1cbiAgICB2YWxpZGF0ZSh2KSB7XG4gICAgICBjb25zdCBwYXJzZWRWID0gcGFyc2VJbnQodiwgMTApO1xuICAgICAgaWYgKGlzTmFOKHBhcnNlZFYpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgRGlzcGxheUNvdW50OiBpbnZhbGlkIHZhbHVlICgke3Z9IGhhcyB0byBiZSBhIGZpbml0ZSBudW1iZXIuKWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlZFY7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgICB9XG4gICAgbWF4aW1pemUoKSB7XG4gICAgICB0aGlzLmNvdW50ID0gdGhpcy5tYXg7XG4gICAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgICB9XG4gICAgbGltaXQodikge1xuICAgICAgdiA9IHRoaXMudmFsaWRhdGUodik7XG4gICAgICBpZiAodiA+IHRoaXMubWF4KSB2ID0gdGhpcy5tYXg7XG4gICAgICBpZiAodiA8IDApIHYgPSAwO1xuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICAgIGFkZCh2ID0gMCkge1xuICAgICAgdiA9IHRoaXMudmFsaWRhdGUodik7XG4gICAgICB0aGlzLmNvdW50ID0gdGhpcy5saW1pdCh0aGlzLmNvdW50ICsgdik7XG4gICAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgICB9XG4gICAganVtcFRvKHYpIHtcbiAgICAgIHYgPSB0aGlzLnZhbGlkYXRlKHYpO1xuICAgICAgdGhpcy5jb3VudCA9IHRoaXMubGltaXQodik7XG4gICAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRQdWxsUmVxdWVzdHMgPSAoKSA9PlxuICAgIGZldGNoKFwiLi9pbmRleC5qc29uXCIpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YS5yZXBvc2l0b3J5LnB1bGxSZXF1ZXN0cy5lZGdlcylcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS53YXJuKGVycikpO1xuXG4gIGNvbnN0IGdldEVsID0gaWQgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIGNvbnN0ICRidXR0b25GaXJzdCA9IGdldEVsKFwianMtYnV0dG9uLWZpcnN0XCIpO1xuICBjb25zdCAkYnV0dG9uTmV4dCA9IGdldEVsKFwianMtYnV0dG9uLW5leHRcIik7XG4gIGNvbnN0ICRidXR0b25QcmV2aW91cyA9IGdldEVsKFwianMtYnV0dG9uLXByZXZpb3VzXCIpO1xuICBjb25zdCAkYnV0dG9uTGFzdCA9IGdldEVsKFwianMtYnV0dG9uLWxhc3RcIik7XG5cbiAgY29uc3QgJGRpc3BsYXkgPSBnZXRFbChcImpzLWRpc3BsYXlcIik7XG4gIGNvbnN0ICRoaXN0b3J5SWQgPSBnZXRFbChcImpzLWhpc3RvcnktaWRcIik7XG4gIGNvbnN0ICRoaXN0b3J5TWF4ID0gZ2V0RWwoXCJqcy1oaXN0b3J5LW1heFwiKTtcblxuICBjb25zdCAkcHJUaXRsZSA9IGdldEVsKFwianMtcHItdGl0bGVcIik7XG4gIGNvbnN0ICRwckF1dGhvciA9IGdldEVsKFwianMtcHItYXV0aG9yXCIpO1xuICBjb25zdCAkcHJBdXRob3JBdmF0YXIgPSBnZXRFbChcImpzLXByLWF1dGhvci1hdmF0YXJcIik7XG4gIGNvbnN0ICRwckVkaXRvciA9IGdldEVsKFwianMtcHItZWRpdG9yXCIpO1xuICBjb25zdCAkcHJFZGl0b3JBdmF0YXIgPSBnZXRFbChcImpzLXByLWVkaXRvci1hdmF0YXJcIik7XG4gIGNvbnN0ICRwck1lcmdlZEF0ID0gZ2V0RWwoXCJqcy1wci1tZXJnZWRBdFwiKTtcbiAgY29uc3QgJHByVXJsID0gZ2V0RWwoXCJqcy1wci11cmxcIik7XG5cbiAgY29uc3QgdXBkYXRlRGlzcGxheSA9IGNvdW50ID0+IHtcbiAgICBjb25zdCBwciA9IHB1bGxSZXF1ZXN0c1tjb3VudF07XG4gICAgY29uc3QgeyBpZCwgdGl0bGUsIGF1dGhvciwgZWRpdG9yLCBtZXJnZWRBdCwgdXJsIH0gPSBwci5ub2RlO1xuXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNTcyOTVcbiAgICAkZGlzcGxheS5jb250ZW50V2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYC4vaGlzdG9yeS8ke2lkfS9kb2NzL2ApO1xuXG4gICAgJGhpc3RvcnlJZC50ZXh0Q29udGVudCA9IGNvdW50ICsgMTtcbiAgICAkcHJUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgJHByQXV0aG9yLnRleHRDb250ZW50ID0gYXV0aG9yLmxvZ2luO1xuICAgICRwckF1dGhvckF2YXRhci5zcmMgPSBhdXRob3IuYXZhdGFyVXJsO1xuICAgICRwckF1dGhvckF2YXRhci5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYEF1dGhvcjogJHthdXRob3IubG9naW59YCk7XG5cbiAgICBpZiAoZWRpdG9yKSB7XG4gICAgICAkcHJFZGl0b3IudGV4dENvbnRlbnQgPSBlZGl0b3IgJiYgZWRpdG9yLmxvZ2luO1xuICAgICAgJHByRWRpdG9yQXZhdGFyLnNyYyA9IGVkaXRvci5hdmF0YXJVcmw7XG4gICAgICAkcHJBdXRob3JBdmF0YXIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGBBdXRob3I6ICR7YXV0aG9yLmxvZ2lufWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkcHJFZGl0b3IudGV4dENvbnRlbnQgPSBcIk5vIGVkaXRvclwiO1xuICAgICAgJHByRWRpdG9yQXZhdGFyLnNyYyA9IFwiXCI7XG4gICAgICAkcHJBdXRob3JBdmF0YXIuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGBObyBlZGl0b3JgKTtcbiAgICB9XG5cbiAgICAkcHJNZXJnZWRBdC50ZXh0Q29udGVudCA9IGBNZXJnZWQgYXQgJHttZXJnZWRBdH1gO1xuICAgICRwclVybC5ocmVmID0gdXJsO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUhhc2hVUkwgPSBoYXNoID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYCMke2hhc2ggKyAxfWApO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVZpZXcgPSBjdXJyZW50Q291bnQgPT4ge1xuICAgIHVwZGF0ZUhhc2hVUkwoY3VycmVudENvdW50KTtcbiAgICB1cGRhdGVEaXNwbGF5KGN1cnJlbnRDb3VudCk7XG4gIH07XG5cbiAgY29uc3QgcHVsbFJlcXVlc3RzID0gYXdhaXQgZ2V0UHVsbFJlcXVlc3RzKCk7XG4gIGNvbnN0IGNvdW50ID0gbmV3IERpc3BsYXlDb3VudChwdWxsUmVxdWVzdHMubGVuZ3RoKTtcblxuICAvLyBnZXQgaGFzaCBsaW5rXG4gIGNvbnN0IGdldEhhc2hDb3VudCA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdChcIiNcIilbMV07XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIC8vIHBvcCBiYWNrXG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBzdGF0ZSBwb3BwZWQ6ICR7d2luZG93LmxvY2F0aW9uLmhhc2h9YCk7XG4gICAgdXBkYXRlRGlzcGxheShjb3VudC5qdW1wVG8oZ2V0SGFzaENvdW50KCkpKTtcbiAgfTtcblxuICAvLyBzdGFydFxuICAkaGlzdG9yeU1heC50ZXh0Q29udGVudCA9IGNvdW50Lm1heCArIDE7XG4gIHVwZGF0ZVZpZXcoY291bnQuanVtcFRvKGdldEhhc2hDb3VudCgpKSk7XG5cbiAgLy8gYnV0dG9uIGNvbnRyb2xcbiAgJGJ1dHRvbkZpcnN0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgdXBkYXRlVmlldyhjb3VudC5yZXNldCgpKTtcbiAgfTtcbiAgJGJ1dHRvbk5leHQub25jbGljayA9ICgpID0+IHtcbiAgICB1cGRhdGVWaWV3KGNvdW50LmFkZCgxKSk7XG4gIH07XG4gICRidXR0b25QcmV2aW91cy5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHVwZGF0ZVZpZXcoY291bnQuYWRkKC0xKSk7XG4gIH07XG4gICRidXR0b25MYXN0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgdXBkYXRlVmlldyhjb3VudC5tYXhpbWl6ZSgpKTtcbiAgfTtcbn07XG5cbndpbmRvdy5vbmxvYWQgPSB0aW1lVHJhdmVsO1xuIl19

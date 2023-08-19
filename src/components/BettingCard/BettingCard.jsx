import React from "react";
import "./style.scss";
const BettingCard = () => {
  $(".card-right__fav").on("click", function () {
    $(this).parent().find(".star").toggleClass("fav");
  });

  $(".odds-1").on("click", function () {
    $(this).parent().find(".odds-1").toggleClass("clicked");
  });

  $(".odds-x").on("click", function () {
    $(this).parent().find(".odds-x").toggleClass("clicked");
  });

  $(".odds-2").on("click", function () {
    $(this).parent().find(".odds-2").toggleClass("clicked");
  });
  return (
    <>
      <div class="shrink">
        Tablet
        <br />
        size
      </div>
      <section class="wrap">
        <div class="card">
          <div class="card-left">
            <div class="card-left__score">
              <h5>1 : 2</h5>
            </div>

            <div class="card-left__competitors">
              <a>Player 1</a>
            </div>
          </div>

          <div class="card-right">
            <div class="card-right__fav">
              <i class="star">
                <svg class="white" viewBox="0 0 16 16">
                  <g>
                    <path d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438 C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03 c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                  </g>
                </svg>

                <svg class="gold" viewBox="0 0 16 16">
                  <g>
                    <path d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438 C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03 c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                  </g>
                </svg>
              </i>
            </div>

            <div class="card-right__live">
              <em>84’</em>
            </div>

            <div class="card-right__odds">
              <button class="odds-1">
                <strong>1</strong>
                <p>4/12</p>
              </button>

              <button class="odds-x">
                <strong>X</strong>
                <p>4/12</p>
              </button>

              <button class="odds-2">
                <strong>2</strong>
                <p>4/12</p>
              </button>
            </div>

            <div class="card-right__markets">
              <strong>Bet</strong>
              <i>
                <svg viewBox="0 0 16 16">
                  <g>
                    <polygon points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "></polygon>
                  </g>
                </svg>
              </i>
            </div>
          </div>
        </div>
        <div class="card odds-down">
          <div class="card-left">
            <div class="card-left__score">
              <h5>0 : 0</h5>
            </div>

            <div class="card-left__competitors">
              <a>Player 2</a>
            </div>
          </div>

          <div class="card-right">
            <div class="card-right__fav">
              <i class="star">
                <svg class="white" viewBox="0 0 16 16">
                  <g>
                    <path d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438 C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03 c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                  </g>
                </svg>

                <svg class="gold" viewBox="0 0 16 16">
                  <g>
                    <path d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438 C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03 c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                  </g>
                </svg>
              </i>
            </div>

            <div class="card-right__live">
              <em>12’</em>
            </div>

            <div class="card-right__odds">
              <button class="odds-1 odds-up">
                <strong>1</strong>
                <p>4/12</p>
              </button>

              <button class="odds-x">
                <strong>X</strong>
                <p>4/12</p>
              </button>

              <button class="odds-2">
                <strong>2</strong>
                <p>4/12</p>
              </button>
            </div>

            <div class="card-right__markets">
              <strong>Bet</strong>
              <i>
                <svg viewBox="0 0 16 16">
                  <g>
                    <polygon points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "></polygon>
                  </g>
                </svg>
              </i>
            </div>
          </div>
        </div>
        <div class="card odds-up">
          <div class="card-left">
            <div class="card-left__score">
              <h5>4 : 4</h5>
            </div>

            <div class="card-left__competitors">
              <a>Player 3</a>
            </div>
          </div>

          <div class="card-right">
            <div class="card-right__fav">
              <i class="star">
                <svg class="white" viewBox="0 0 16 16">
                  <g>
                    <path d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438 C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03 c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                  </g>
                </svg>

                <svg class="gold" viewBox="0 0 16 16">
                  <g>
                    <path d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438 C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03 c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                  </g>
                </svg>
              </i>
            </div>

            <div class="card-right__live">
              <em>84’</em>
            </div>

            <div class="card-right__odds">
              <button class="odds-1">
                <strong>1</strong>
                <p>4/12</p>
              </button>

              <button class="odds-x">
                <strong>X</strong>
                <p>4/12</p>
              </button>

              <button class="odds-2">
                <strong>2</strong>
                <p>4/12</p>
              </button>
            </div>

            <div class="card-right__markets">
              <strong>Bet</strong>
              <i>
                <svg viewBox="0 0 16 16">
                  <g>
                    <polygon points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "></polygon>
                  </g>
                </svg>
              </i>
            </div>
          </div>
        </div>
        <div class="card disabled">
          <div class="card-left">
            <div class="card-left__score">
              <h5>0 : 1</h5>
            </div>

            <div class="card-left__competitors">
              <a>Player 4</a>
            </div>
          </div>

          <div class="card-right">
            <div class="card-right__fav">
              <i class="star">
                <svg class="white" viewBox="0 0 16 16">
                  <g>
                    <path d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438 C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03 c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                  </g>
                </svg>

                <svg class="gold" viewBox="0 0 16 16">
                  <g>
                    <path d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438 C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03 c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                  </g>
                </svg>
              </i>
            </div>

            <div class="card-right__live">
              <em>84’</em>
            </div>

            <div class="card-right__odds">
              <button class="odds-1">
                <strong>1</strong>
                <p>4/12</p>
              </button>

              <button class="odds-x">
                <strong>X</strong>
                <p>4/12</p>
              </button>

              <button class="odds-2">
                <strong>2</strong>
                <p>4/12</p>
              </button>
            </div>

            <div class="card-right__markets">
              <strong>Bet</strong>
              <i>
                <svg viewBox="0 0 16 16">
                  <g>
                    <polygon points="9.3,1.3 7.9,2.7 12.2,7 0,7 0,9 12.2,9 7.9,13.3 9.3,14.7 16,8 "></polygon>
                  </g>
                </svg>
              </i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BettingCard;

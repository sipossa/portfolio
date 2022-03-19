<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/index.php');
    return;
}

if(G5_COMMUNITY_USE === false) {
    include_once(G5_THEME_SHOP_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>
        </header>
        <div class="nav_box">
            <nav>
                <ul>
                    <li><a href="#s01">Neoforêt</a></li>
                    <li><a href="#s02">Product</a></li>
                    <li><a href="#s03">환경 경영</a></li>
                    <li><a href="#s04">제조 공정</a></li>
                    <li></li>
                </ul>
            </nav>
        </div>
        <main>
            <section class="fullpage">

                <div class="section section01">
                    <div class="main_slider">
                        <figure class="itm01"></figure>
                    </div>
                    <div class="slogan">
                        <h2>Return to forest</h2>
                        <p>숲으로 돌아가는 종이, 네오포레</p>
                    </div>
                    <div class="line">
                        <span></span>
                    </div>
                </div>


                <div class="section section02">
                    <div class="left_con">
                        <div class="product_slider01">
                            <figure class="first_pro01"></figure>
                            <figure class="first_pro02"></figure>
                            <figure class="first_pro03"></figure>
                            <figure class="first_pro04"></figure>
                            <figure class="first_pro05"></figure>
                            <figure class="first_pro06"></figure>
                        </div>
                        <div class="dots_box">
                            <ul class="slider_dots">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                            </ul>
                            <div class="button">
                                <i class="xi-play play"></i>
                                <i class="xi-pause pause"></i>
                            </div>
                        </div>
                    </div>
                    <div class="right_con">
                        <div class="txt_slider">
                            <figcaption>
                                <strong>Neoforêt CUP</strong>
                                <h3>네오포레 CUP</h3>
                                <p>국내 유일 생분해성 &amp; 재활용성 인증을 받은 착한 종이컵</p>
                                <a href="<?php echo G5_THEME_URL ?>/doc/info01.php">
                                    <span>자세히 보기</span>
                                    <svg class="right-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="33px"
                                        height="7.4px" viewBox="0 0 33 7.4"
                                        style="overflow:visible;enable-background:new 0 0 33 7.4;" xml:space="preserve">
                                        <polyline class="right-arrow" points="0.5,6.9 32.5,6.9 22.1,0.5 " />
                                    </svg>
                                </a>
                            </figcaption>
                            <figcaption>
                                <strong>Neoforêt STRAW</strong>
                                <h3>네오포레 STRAW</h3>
                                <p>천연펄프로 만든 친환경 종이 빨대</p>
                                <a href="<?php echo G5_THEME_URL ?>/doc/info02.php">
                                    <span>자세히 보기</span>
                                    <svg class="right-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="33px"
                                        height="7.4px" viewBox="0 0 33 7.4"
                                        style="overflow:visible;enable-background:new 0 0 33 7.4;" xml:space="preserve">
                                        <polyline class="right-arrow" points="0.5,6.9 32.5,6.9 22.1,0.5 " />
                                    </svg>
                                </a>
                            </figcaption>
                            <figcaption>
                                <strong>Neoforêt Aircushion</strong>
                                <h3>네오포레 완충재</h3>
                                <p>재활용이 가능한 국내 최초 에어쿠션형 완충재</p>
                                <a href="<?php echo G5_THEME_URL ?>/doc/info03.php">
                                    <span>자세히 보기</span>
                                    <svg class="right-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="33px"
                                        height="7.4px" viewBox="0 0 33 7.4"
                                        style="overflow:visible;enable-background:new 0 0 33 7.4;" xml:space="preserve">
                                        <polyline class="right-arrow" points="0.5,6.9 32.5,6.9 22.1,0.5 " />
                                    </svg>
                                </a>
                            </figcaption>
                            <figcaption>
                                <strong>Neoforêt FLEX</strong>
                                <h3>네오포레 FLEX</h3>
                                <p>종이 튜브, 라벨 등 다용도로 사용 가능한 Less 플라스틱 컨셉의 친환경 제품</p>
                                <a href="<?php echo G5_THEME_URL ?>/doc/info04.php">
                                    <span>자세히 보기</span>
                                    <svg class="right-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="33px"
                                        height="7.4px" viewBox="0 0 33 7.4"
                                        style="overflow:visible;enable-background:new 0 0 33 7.4;" xml:space="preserve">
                                        <polyline class="right-arrow" points="0.5,6.9 32.5,6.9 22.1,0.5 " />
                                    </svg>
                                </a>
                            </figcaption>
                            <figcaption>
                                <h3>펄프 몰드</h3>
                                <p>국내 유일 생분해성 &amp; 재활용성 인증을 받은 착한 종이컵</p>
                                <a href="<?php echo G5_THEME_URL ?>/doc/info05.php">
                                    <span>자세히 보기</span>
                                    <svg class="right-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="33px"
                                        height="7.4px" viewBox="0 0 33 7.4"
                                        style="overflow:visible;enable-background:new 0 0 33 7.4;" xml:space="preserve">
                                        <polyline class="right-arrow" points="0.5,6.9 32.5,6.9 22.1,0.5 " />
                                    </svg>
                                </a>
                            </figcaption>
                            <figcaption>
                                <h3>CellRim®</h3>
                                <p>천연펄프와 톱밥(우드 파티클)을 활용하여 만든 생분해 가능한 플라스틱</p>
                                <a href="<?php echo G5_THEME_URL ?>/doc/info06.php">
                                    <span>자세히 보기</span>
                                    <svg class="right-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="33px"
                                        height="7.4px" viewBox="0 0 33 7.4"
                                        style="overflow:visible;enable-background:new 0 0 33 7.4;" xml:space="preserve">
                                        <polyline class="right-arrow" points="0.5,6.9 32.5,6.9 22.1,0.5 " />
                                    </svg>
                                </a>
                            </figcaption>
                        </div>
                        <div class="product_slider02">
                            <figure class="second_pro01"></figure>
                            <figure class="second_pro02"></figure>
                            <figure class="second_pro03"></figure>
                            <figure class="second_pro04"></figure>
                            <figure class="second_pro05"></figure>
                            <figure class="second_pro06"></figure>
                        </div>
                    </div>
                </div>


                <div class="section section03">
                    <div class="text_box">
                        <p>친환경적인 무림의 그린 경영</p>
                        <h2>ECO CYCLE</h2>
                    </div>
                    <div class="container">
                        <ul class="flex_box">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="73.2" height="91" style="overflow:visible;enable-background:new 0 0 73.2 91" xml:space="preserve"><path class="icon01" d="M39 9.9C39.7 4.6 44.2.5 49.6.5c5.9 0 10.7 4.8 10.7 10.7 0 .9-.1 1.8-.3 2.6.6-.1 1.2-.2 1.9-.2 5.9 0 10.7 4.8 10.7 10.7 0 4.1-2.3 7.7-5.7 9.5 2.5 2 4.1 5 4.1 8.4 0 3.8-2 7.1-5 9 .4 1.2.7 2.4.7 3.7 0 5.9-4.8 10.7-10.7 10.7h-7.4"/><path class="icon01" d="M60.4 48c0 10.5-8.1 19-18 19H20.5C9.4 67 .5 57.5.5 45.9c0-9.6 6.1-17.7 14.4-20.3v-.8c0-9.4 7.2-17.1 16.2-17.1s16.2 7.6 16.2 17.1c0 1.7-.2 3.3-.7 4.8C54.5 31.5 60.4 39 60.4 48zM30.5 90.5V36M52.6 65.8v24.7M21.1 90.5h39.3M30.5 59.1l10.3-6.9M30.5 47l-7.8-5M60.4 47.5l5.4-4M52.6 32.1v-8.6"/></svg>
                                <h3>친환경 종이를 위한<br> 무림의 원료 생산 시스템</h3>
                                <p>· 순환 경작 조림지<br>· 여의도 면적 20배 조림지</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="63.2" height="91" style="overflow:visible;enable-background:new 0 0 63.2 91" xml:space="preserve"><style></style><path class="icon02" d="M26 90.5H.5l6.8-67h11.9zM22.2 12.8c-.4 2.5-5 4.7-8.1 3.1S10.4 9 11.3 7.6 14 5 16.2 3.8c2.3-1.2 6-3.3 6-3.3s-.2 1.8-.1 5.1c.1 1.5.5 4.7.1 7.2z"/><path class="icon02" d="M17.3 10.1s-4.2 4.3-4 10.1M21.2 42.9 25 32h4.5v10.9h8.1M37.6 42.9 41.7 32h4.4v10.9h8.1"/><path class="icon02" d="M54.2 42.9 58.3 32h4.4v58.5H26M29.4 59.4v-7.2h8.2"/><path class="icon02" d="M45.9 59.4v-7.2h8.3M29.4 75.9v-7.2h8.2M45.9 75.9v-7.2h8.3"/></svg>
                                <h3>친환경 공정을 통한<br> 무림의 굴뚝 없는 공장</h3>
                                <p>· 흑액 에너지 사용<br> · 화석 연료 低사용 공장</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="71.4" height="91" style="overflow:visible;enable-background:new 0 0 71.4 91" xml:space="preserve"><path class="icon03" d="M61.1 78.5c-.3 1.8-3.6 3.4-5.8 2.2-2.2-1.2-2.7-5-2-6 .7-1 2-1.9 3.6-2.7 1.6-.9 4.4-2.4 4.4-2.4s-.2 1.3-.1 3.7c-.1 1.1.2 3.3-.1 5.2z"/><path class="icon03" d="M57.6 76.5s-3 3.2-2.9 7.4M44.9 89H.5V.5h44.6M64.3 19.7V61M64.3 19.7H45.1V.5z"/><circle class="icon03" cx="57.1" cy="76.7" r="13.8"/></svg>
                                <h3>품질까지 완벽한<br> 무림의 Premium 종이</h3>
                                <p>· 경쟁력 있는 종이 생산<br> · 다양한 환경 인증 보유<br> · 섬유질이 살아 있는 종이</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="114.3" height="91" style="overflow:visible;enable-background:new 0 0 114.3 91" xml:space="preserve"><path class="icon04" d="M86.9 30.8c-3.9 6.7-18.4 13.6-25 6.8s-.1-19.3 3.4-23.1c4.2-4.5 10.1-7.3 17.3-9 7.4-1.7 19.8-5 19.8-5s-4.7 4.8-7.8 14.1c-1.2 3.6-3.6 9.3-7.7 16.2z"/><path class="icon04" d="M83.7 13.9s-26.5 16.5-26.5 49M35.9 36.6c2.6 4.8 12 8.6 17.1 4.1s2-15.7-.6-18.2-5.6-5.2-10.6-6.7C36.7 14.2 28 12.6 28 12.6s3.1 3.7 4.7 10.4c.9 3.3 0 7.7 3.2 13.6z"/><path class="icon04" d="M41.3 25.4s15.8 12.8 15.8 37.5"/><g><path class="icon04" d="m41.9 90.5-3.9-14-23.4-7.7L2.7 44.9s-4.5-8.4-.7-10.2c3-2.2 6.6 5.8 6.6 5.8.6 1.3 6.3 9.9 6.3 9.9"/><path class="icon04" d="M24.4 60.9s-3.3-1.6-5.5-2.8-5.7-4.8-3.9-7.6c1.8-2.7 15.8 5.8 15.8 5.8s4.1.4 7 2.7l13.9 17"/></g><g><path class="icon04" d="m72.3 90.5 3.9-14 23.4-7.7 11.9-23.9s4.5-8.4.7-10.2c-3-2.2-6.6 5.8-6.6 5.8-.6 1.3-6.3 9.9-6.3 9.9"/><path class="icon04" d="M89.9 60.9s3.3-1.6 5.5-2.8 5.7-4.8 3.9-7.6c-1.8-2.7-15.8 5.8-15.8 5.8s-4.1.4-7 2.7L62.6 76"/></g></svg>
                                <h3>자연과 함께 성장하는<br> 무림의 친환경 종이 제품</h3>
                                <p>· 조림지로부터 탄생<br> · 생분해 가능한 제품<br> · 재활용 원료 사용 제품</p>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="section section04">
                    <div class="left">
                        <h2>자연으로 돌아가는 네오포레의 기술</h2>
                        <p>
                            네오포레 코팅 과정은 최초 에멀전 형태의 수용성 코팅제를 원지에 도포 후<br>
                            120~150도 이상의 건조구간을 거치게 되면서 고분자들이<br>
                            서로 촘촘히 결합하며 일종의 배리어 막이 형성됩니다.<br>
                            건조가 끝나면 냉각을 거쳐 식품포장재의 기능을 갖춘 안전한 네오포레가 탄생합니다.<br>
                            수용성 코팅 은 기존 플라스틱(PE) 코팅제와 달리, 내유성 &amp; 내수성을 갖춘 생분해가 가능한 친환경 코팅제 입니다.
                        </p>
                        <h3>친환경 공정 적용 제품</h3>
                        <div class="sc04_slider">
                            <figure>
                                <img src="/theme/pf05/img/sc04_01.jpg" alt="">
                                <span>네오포레 CUP</span>
                            </figure>
                            <figure>
                                <img src="/theme/pf05/img/sc04_02.jpg" alt="">
                                <span>네오포레 STRAW</span>
                            </figure>
                            <figure>
                                <img src="/theme/pf05/img/sc04_03.jpg" alt="">
                                <span>네오포레 완충재</span>
                            </figure>
                            <figure>
                                <img src="/theme/pf05/img/sc04_04.jpg" alt="">
                                <span>네오포레 FLEX</span>
                            </figure>
                        </div>
                    </div>
                    <div class="right">
                        <figure class="pic"></figure>
                    </div>
                </div>

<?php
include_once(G5_THEME_PATH.'/tail.php');
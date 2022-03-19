<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}

if(G5_COMMUNITY_USE === false) {
    include_once(G5_THEME_SHOP_PATH.'/shop.tail.php');
    return;
}
?>
<?php
if(!defined('_INDEX_')) {
    include_once(G5_THEME_PATH. '/sub_tail.php');
}
?>
                <div class="section footer fp-auto-height">
                    <div class="banner_con">
                        <a href="/bbs/board.php?bo_table=qa" target="_blank" class="banner_left">
                            <span>FAQ</span>
                            <svg class="right-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="33px"
                            height="7.4px" viewBox="0 0 33 7.4"
                            style="overflow:visible;enable-background:new 0 0 33 7.4;" xml:space="preserve">
                            <polyline class="right-arrow" points="0.5,6.9 32.5,6.9 22.1,0.5 " />
                        </svg>
                        </a>
                        <a href="/bbs/board.php?bo_table=consulting" target="_blank" class="banner_right">
                            <span>온라인 문의</span>
                            <svg class="right-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="33px"
                            height="7.4px" viewBox="0 0 33 7.4"
                            style="overflow:visible;enable-background:new 0 0 33 7.4;" xml:space="preserve">
                            <polyline class="right-arrow" points="0.5,6.9 32.5,6.9 22.1,0.5 " /></svg>
                        </a>
                    </div>
                    <div class="container">
                        <div class="footer_left">
                            <a href="http://hunifive.dothome.co.kr/">
                                <img src="/theme/pf05/img/footer_logo.png" alt="">
                            </a>
                        </div>
                        <div class="footer_right">
                            <ul>
                                <li>서울특별시 강남구 강남대로 656(신사동)</li>
                            </ul>
                            <ul>
                                <li><a href="tel:02-3485-1500">TEL : 02. 3485. 1500</a></li>
                                <li><a href="#!">FAX : 02. 3443. 2997</a></li>
                            </ul>
                            <ul>
                                <li><a href="#!"><strong>개인정보 처리방침</strong></a></li>
                            </ul>
                            <address>COPYRIGHT&copy; 2021 MOORIM PAPER. ALL RIGHT RESERVED</address>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <div class="mopen">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <script src="/theme/pf05/js/jquery-1.12.4.min.js"></script>
    <script src="/theme/pf05/js/slick.min.js"></script>
    <script src="/theme/pf05/js/fullpage.min.js"></script>
    <script src="<?php echo G5_THEME_JS_URL; ?>/<?php echo defined('_INDEX_') ? 'pf05' : 'pf05_sub'; ?>.js?ver=<?php echo G5_JS_VER; ?>">
<?php
if(G5_DEVICE_BUTTON_DISPLAY && !G5_IS_MOBILE) { ?>
<?php
}

if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<?php
include_once(G5_THEME_PATH."/tail.sub.php");
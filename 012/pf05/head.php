<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/head.php');
    return;
}

if(G5_COMMUNITY_USE === false) {
    define('G5_IS_COMMUNITY_PAGE', true);
    include_once(G5_THEME_SHOP_PATH.'/shop.head.php');
    return;
}
include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>
    <?php
    if(defined('_INDEX_')) { // index에서만 실행
        include G5_BBS_PATH.'/newwin.inc.php'; // 팝업레이어
    }
    ?>

<!-- 상단 시작 { -->
    <div class="wrap">
        <header class="header">
            <h1>
                <a href="http://hunifive.dothome.co.kr/">logo</a>
            </h1>
            <div class="sns">
                <span>SNS</span>
                <i class="xi-caret-down-min"></i>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/moorim_gallery/" target="_blank">
                            <i class="xi-instagram"></i>
                            <span>instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/themoorim/" target="_blank">
                            <i class="xi-facebook-official"></i>
                            <span>facebook</span>
                        </a>
                    </li>
                </ul>
            </div>
<?php
if(!defined('_INDEX_')) {
    include_once(G5_THEME_PATH. '/sub_head.php');
}
?>
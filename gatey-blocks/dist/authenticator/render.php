<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
$gatey_hash = substr(md5(serialize($attributes)), 0, 6) . '_' . wp_rand();
$gatey_bid = 'smartcloud_gatey_authenticator_' . $gatey_hash;

// Encode all attributes into a single data-config attribute
$gatey_config = base64_encode(wp_json_encode($attributes));
?>
<div smartcloud-gatey-authenticator id="<?php echo esc_html($gatey_bid) ?>"
    data-is-preview="smartcloud-gatey-is-preview" data-config="<?php echo esc_attr($gatey_config) ?>" <?php echo wp_kses_data(get_block_wrapper_attributes()) ?>>
    <div style="display: none;">
        <?php echo esc_html($content) ?>
    </div>
</div>
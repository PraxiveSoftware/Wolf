pub fn enabled_features() -> &'static [&'static str] {
    &[
        "blizing",
        "ssl",
        "protocol::http",
        "protocol::https",
        "storage",
        "devtools",
        "multi-tabs",
        "adblock::ads",
        "adblock::trackers",
        "adblock::malware",
        "adblock::scams",
        "extensions",
        "extensions::custom",
    ]
}
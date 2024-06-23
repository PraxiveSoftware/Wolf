mod features;

fn get_features() {
    let enabled: &[&str] = features::enabled::enabled_features();
    let disabled: &[&str] = features::disabled::disabled_features();

    println!("Enabled features:");
    for feature in enabled {
        println!("{}", format!("- {}", feature));
    }

    println!();
    println!("Disabled features:");
    for feature in disabled {
        println!("{}", format!("- {}", feature));
    }
}

fn main() {
    get_features();
}
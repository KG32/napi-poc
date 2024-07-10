#![allow(dead_code)]
#[napi]
fn fibonacci_rs(n: u32) -> u32 {
    if n == 1 || n == 2 {
        return 1;
    }
    fibonacci_rs(n - 1) + fibonacci_rs(n - 2)
}

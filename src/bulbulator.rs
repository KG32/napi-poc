#![allow(dead_code)]
use std::time::SystemTime;
use napi_derive::napi;

#[napi]
pub enum BulBulQueryType {
    First,
    Last,
}

#[napi]
pub struct RustBulbulator {
    name: String,
    logs: Vec<SystemTime>,
}

#[napi]
impl RustBulbulator {
    #[napi(constructor)]
     pub fn new(name: String) -> Self {
        println!("\nInitializing {}", name);
        Self {
            name,
            logs: vec![]
        }
    }

    #[napi]
     pub fn bulbul(&mut self) {
        println!("[{}]: Bul bul 🚀", self.name);
        self.log_bul(SystemTime::now());
    }

    #[napi]
     pub fn time_since_bulbul(&self, query: BulBulQueryType) -> Option<u32> {
        let timestamp = match query {
            BulBulQueryType::First => self.logs.first(),
            BulBulQueryType::Last => self.logs.last(),
        };
        match timestamp {
            Some(ts) => Some(
                SystemTime::now()
                .duration_since(*ts)
                .unwrap()
                .as_millis() as u32),
            None => None
        }
    }

    #[napi(getter)]
    pub fn bulbubs_count(&self) -> u32 {
        self.logs.len() as u32
    }

     fn log_bul(&mut self, timestamp: SystemTime) {
        self.logs.push(timestamp);
    }
}

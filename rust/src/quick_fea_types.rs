#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Node {
    #[prost(string, tag="1")]
    pub id: std::string::String,
    #[prost(string, tag="2")]
    pub name: std::string::String,
    #[prost(double, tag="3")]
    pub x: f64,
    #[prost(double, tag="4")]
    pub y: f64,
    #[prost(double, tag="5")]
    pub z: f64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct IsotropicMaterial {
    #[prost(string, tag="1")]
    pub id: std::string::String,
    #[prost(string, tag="2")]
    pub name: std::string::String,
    #[prost(double, tag="3")]
    pub e: f64,
    #[prost(double, tag="4")]
    pub nu: f64,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum MaterialCategory {
    Isotropic = 0,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct HomogenousSection {
    #[prost(string, tag="1")]
    pub id: std::string::String,
    #[prost(string, tag="2")]
    pub name: std::string::String,
    #[prost(message, optional, tag="3")]
    pub properties: ::std::option::Option<HomogenousSectionProperties>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct HomogenousSectionProperties {
    #[prost(double, tag="1")]
    pub a: f64,
    #[prost(double, tag="2")]
    pub avy: f64,
    #[prost(double, tag="3")]
    pub avz: f64,
    #[prost(double, tag="4")]
    pub j: f64,
    #[prost(double, tag="5")]
    pub iy: f64,
    #[prost(double, tag="6")]
    pub iz: f64,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum SectionCategory {
    Homogenous = 0,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Frame {
    #[prost(string, tag="1")]
    pub id: std::string::String,
    #[prost(string, tag="2")]
    pub name: std::string::String,
    #[prost(string, tag="3")]
    pub start_node_id: std::string::String,
    #[prost(string, tag="4")]
    pub end_node_id: std::string::String,
    #[prost(string, tag="5")]
    pub material_id: std::string::String,
    #[prost(string, tag="6")]
    pub section_id: std::string::String,
    #[prost(double, tag="7")]
    pub rotation: f64,
    #[prost(enumeration="MaterialCategory", tag="8")]
    pub material_category: i32,
    #[prost(enumeration="SectionCategory", tag="9")]
    pub section_category: i32,
    #[prost(message, optional, tag="10")]
    pub stiffness_modifiers: ::std::option::Option<FrameStiffnessModifiers>,
    #[prost(message, optional, tag="11")]
    pub start_releases: ::std::option::Option<FrameEndReleases>,
    #[prost(message, optional, tag="12")]
    pub end_releases: ::std::option::Option<FrameEndReleases>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FrameStiffnessModifiers {
    #[prost(double, tag="1")]
    pub a: f64,
    #[prost(double, tag="2")]
    pub avy: f64,
    #[prost(double, tag="3")]
    pub avz: f64,
    #[prost(double, tag="4")]
    pub j: f64,
    #[prost(double, tag="5")]
    pub iy: f64,
    #[prost(double, tag="6")]
    pub iz: f64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct FrameEndReleases {
    #[prost(enumeration="frame_end_releases::Category", tag="1")]
    pub a: i32,
    #[prost(enumeration="frame_end_releases::Category", tag="2")]
    pub vy: i32,
    #[prost(enumeration="frame_end_releases::Category", tag="3")]
    pub vz: i32,
    #[prost(enumeration="frame_end_releases::Category", tag="4")]
    pub t: i32,
    #[prost(enumeration="frame_end_releases::Category", tag="5")]
    pub my: i32,
    #[prost(enumeration="frame_end_releases::Category", tag="6")]
    pub mz: i32,
}
pub mod frame_end_releases {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Category {
        Fixed = 0,
        Free = 1,
    }
}

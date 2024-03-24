// protoc -I proto/ --go_out=proto --go_opt=paths=source_relative --go-grpc_out=proto --go-grpc_opt=paths=source_relative proto/pro.proto

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.12
// source: pro.proto

package types

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Policy is a policy definition
type Policy struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name  string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Rules string `protobuf:"bytes,2,opt,name=rules,proto3" json:"rules,omitempty"`
}

func (x *Policy) Reset() {
	*x = Policy{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Policy) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Policy) ProtoMessage() {}

func (x *Policy) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Policy.ProtoReflect.Descriptor instead.
func (*Policy) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{0}
}

func (x *Policy) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Policy) GetRules() string {
	if x != nil {
		return x.Rules
	}
	return ""
}

type ACLPolicyUpsertRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Policy *Policy `protobuf:"bytes,1,opt,name=policy,proto3" json:"policy,omitempty"`
}

func (x *ACLPolicyUpsertRequest) Reset() {
	*x = ACLPolicyUpsertRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLPolicyUpsertRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLPolicyUpsertRequest) ProtoMessage() {}

func (x *ACLPolicyUpsertRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLPolicyUpsertRequest.ProtoReflect.Descriptor instead.
func (*ACLPolicyUpsertRequest) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{1}
}

func (x *ACLPolicyUpsertRequest) GetPolicy() *Policy {
	if x != nil {
		return x.Policy
	}
	return nil
}

type ACLPolicyUpsertResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Success bool `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
}

func (x *ACLPolicyUpsertResponse) Reset() {
	*x = ACLPolicyUpsertResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLPolicyUpsertResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLPolicyUpsertResponse) ProtoMessage() {}

func (x *ACLPolicyUpsertResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLPolicyUpsertResponse.ProtoReflect.Descriptor instead.
func (*ACLPolicyUpsertResponse) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{2}
}

func (x *ACLPolicyUpsertResponse) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

type ACLPolicyDeleteRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *ACLPolicyDeleteRequest) Reset() {
	*x = ACLPolicyDeleteRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLPolicyDeleteRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLPolicyDeleteRequest) ProtoMessage() {}

func (x *ACLPolicyDeleteRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLPolicyDeleteRequest.ProtoReflect.Descriptor instead.
func (*ACLPolicyDeleteRequest) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{3}
}

func (x *ACLPolicyDeleteRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type ACLPolicyDeleteResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Success bool `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
}

func (x *ACLPolicyDeleteResponse) Reset() {
	*x = ACLPolicyDeleteResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLPolicyDeleteResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLPolicyDeleteResponse) ProtoMessage() {}

func (x *ACLPolicyDeleteResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLPolicyDeleteResponse.ProtoReflect.Descriptor instead.
func (*ACLPolicyDeleteResponse) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{4}
}

func (x *ACLPolicyDeleteResponse) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

type ACLPolicyInfoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *ACLPolicyInfoRequest) Reset() {
	*x = ACLPolicyInfoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLPolicyInfoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLPolicyInfoRequest) ProtoMessage() {}

func (x *ACLPolicyInfoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLPolicyInfoRequest.ProtoReflect.Descriptor instead.
func (*ACLPolicyInfoRequest) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{5}
}

func (x *ACLPolicyInfoRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type ACLPolicyInfoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Policy *Policy `protobuf:"bytes,1,opt,name=policy,proto3" json:"policy,omitempty"`
}

func (x *ACLPolicyInfoResponse) Reset() {
	*x = ACLPolicyInfoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLPolicyInfoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLPolicyInfoResponse) ProtoMessage() {}

func (x *ACLPolicyInfoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLPolicyInfoResponse.ProtoReflect.Descriptor instead.
func (*ACLPolicyInfoResponse) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{6}
}

func (x *ACLPolicyInfoResponse) GetPolicy() *Policy {
	if x != nil {
		return x.Policy
	}
	return nil
}

type ACLPolicyListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Policies []*Policy `protobuf:"bytes,1,rep,name=policies,proto3" json:"policies,omitempty"`
}

func (x *ACLPolicyListResponse) Reset() {
	*x = ACLPolicyListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLPolicyListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLPolicyListResponse) ProtoMessage() {}

func (x *ACLPolicyListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLPolicyListResponse.ProtoReflect.Descriptor instead.
func (*ACLPolicyListResponse) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{7}
}

func (x *ACLPolicyListResponse) GetPolicies() []*Policy {
	if x != nil {
		return x.Policies
	}
	return nil
}

// Token is a token string
type Token struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *Token) Reset() {
	*x = Token{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Token) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Token) ProtoMessage() {}

func (x *Token) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Token.ProtoReflect.Descriptor instead.
func (*Token) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{8}
}

func (x *Token) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

type ACLTokenUpsertRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token *Token `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *ACLTokenUpsertRequest) Reset() {
	*x = ACLTokenUpsertRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLTokenUpsertRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLTokenUpsertRequest) ProtoMessage() {}

func (x *ACLTokenUpsertRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLTokenUpsertRequest.ProtoReflect.Descriptor instead.
func (*ACLTokenUpsertRequest) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{9}
}

func (x *ACLTokenUpsertRequest) GetToken() *Token {
	if x != nil {
		return x.Token
	}
	return nil
}

type ACLTokenUpsertResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Success bool `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
}

func (x *ACLTokenUpsertResponse) Reset() {
	*x = ACLTokenUpsertResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLTokenUpsertResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLTokenUpsertResponse) ProtoMessage() {}

func (x *ACLTokenUpsertResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLTokenUpsertResponse.ProtoReflect.Descriptor instead.
func (*ACLTokenUpsertResponse) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{10}
}

func (x *ACLTokenUpsertResponse) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

type ACLTokenDeleteRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *ACLTokenDeleteRequest) Reset() {
	*x = ACLTokenDeleteRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLTokenDeleteRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLTokenDeleteRequest) ProtoMessage() {}

func (x *ACLTokenDeleteRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLTokenDeleteRequest.ProtoReflect.Descriptor instead.
func (*ACLTokenDeleteRequest) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{11}
}

func (x *ACLTokenDeleteRequest) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

type ACLTokenDeleteResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Success bool `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
}

func (x *ACLTokenDeleteResponse) Reset() {
	*x = ACLTokenDeleteResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[12]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLTokenDeleteResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLTokenDeleteResponse) ProtoMessage() {}

func (x *ACLTokenDeleteResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[12]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLTokenDeleteResponse.ProtoReflect.Descriptor instead.
func (*ACLTokenDeleteResponse) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{12}
}

func (x *ACLTokenDeleteResponse) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

type ACLTokenInfoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *ACLTokenInfoRequest) Reset() {
	*x = ACLTokenInfoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[13]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLTokenInfoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLTokenInfoRequest) ProtoMessage() {}

func (x *ACLTokenInfoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[13]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLTokenInfoRequest.ProtoReflect.Descriptor instead.
func (*ACLTokenInfoRequest) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{13}
}

func (x *ACLTokenInfoRequest) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

type ACLTokenInfoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token *Token `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *ACLTokenInfoResponse) Reset() {
	*x = ACLTokenInfoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[14]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLTokenInfoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLTokenInfoResponse) ProtoMessage() {}

func (x *ACLTokenInfoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[14]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLTokenInfoResponse.ProtoReflect.Descriptor instead.
func (*ACLTokenInfoResponse) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{14}
}

func (x *ACLTokenInfoResponse) GetToken() *Token {
	if x != nil {
		return x.Token
	}
	return nil
}

type ACLTokenListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tokens []*Token `protobuf:"bytes,1,rep,name=tokens,proto3" json:"tokens,omitempty"`
}

func (x *ACLTokenListResponse) Reset() {
	*x = ACLTokenListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pro_proto_msgTypes[15]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ACLTokenListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ACLTokenListResponse) ProtoMessage() {}

func (x *ACLTokenListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pro_proto_msgTypes[15]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ACLTokenListResponse.ProtoReflect.Descriptor instead.
func (*ACLTokenListResponse) Descriptor() ([]byte, []int) {
	return file_pro_proto_rawDescGZIP(), []int{15}
}

func (x *ACLTokenListResponse) GetTokens() []*Token {
	if x != nil {
		return x.Tokens
	}
	return nil
}

var File_pro_proto protoreflect.FileDescriptor

var file_pro_proto_rawDesc = []byte{
	0x0a, 0x09, 0x70, 0x72, 0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x32, 0x0a, 0x06, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a,
	0x05, 0x72, 0x75, 0x6c, 0x65, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x72, 0x75,
	0x6c, 0x65, 0x73, 0x22, 0x3f, 0x0a, 0x16, 0x41, 0x43, 0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79,
	0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x25, 0x0a,
	0x06, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0d, 0x2e,
	0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x06, 0x70, 0x6f,
	0x6c, 0x69, 0x63, 0x79, 0x22, 0x33, 0x0a, 0x17, 0x41, 0x43, 0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x79, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x18, 0x0a, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x22, 0x2c, 0x0a, 0x16, 0x41, 0x43, 0x4c,
	0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x33, 0x0a, 0x17, 0x41, 0x43, 0x4c, 0x50, 0x6f,
	0x6c, 0x69, 0x63, 0x79, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x22, 0x2a, 0x0a, 0x14,
	0x41, 0x43, 0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x3e, 0x0a, 0x15, 0x41, 0x43, 0x4c, 0x50,
	0x6f, 0x6c, 0x69, 0x63, 0x79, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x25, 0x0a, 0x06, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x0d, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79,
	0x52, 0x06, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x22, 0x42, 0x0a, 0x15, 0x41, 0x43, 0x4c, 0x50,
	0x6f, 0x6c, 0x69, 0x63, 0x79, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x29, 0x0a, 0x08, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x50, 0x6f, 0x6c, 0x69,
	0x63, 0x79, 0x52, 0x08, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x22, 0x1d, 0x0a, 0x05,
	0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x3b, 0x0a, 0x15, 0x41,
	0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x22, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x0c, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x32, 0x0a, 0x16, 0x41, 0x43, 0x4c, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x22, 0x2d, 0x0a, 0x15,
	0x41, 0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x32, 0x0a, 0x16, 0x41,
	0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x22,
	0x2b, 0x0a, 0x13, 0x41, 0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x3a, 0x0a, 0x14,
	0x41, 0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x22, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x0c, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x3c, 0x0a, 0x14, 0x41, 0x43, 0x4c, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x24, 0x0a, 0x06, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x0c, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x06,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x32, 0xed, 0x04, 0x0a, 0x08, 0x44, 0x6b, 0x72, 0x6f, 0x6e,
	0x50, 0x72, 0x6f, 0x12, 0x50, 0x0a, 0x0f, 0x41, 0x43, 0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79,
	0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x12, 0x1d, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x41,
	0x43, 0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x41, 0x43,
	0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x50, 0x0a, 0x0f, 0x41, 0x43, 0x4c, 0x50, 0x6f, 0x6c, 0x69,
	0x63, 0x79, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x1d, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x41, 0x43, 0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e,
	0x41, 0x43, 0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4a, 0x0a, 0x0d, 0x41, 0x43, 0x4c, 0x50, 0x6f,
	0x6c, 0x69, 0x63, 0x79, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x1b, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x41, 0x43, 0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x41, 0x43,
	0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x45, 0x0a, 0x0d, 0x41, 0x43, 0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79,
	0x4c, 0x69, 0x73, 0x74, 0x12, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x1c, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2e, 0x41, 0x43, 0x4c, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x4c, 0x69,
	0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4d, 0x0a, 0x0e, 0x41, 0x43,
	0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x55, 0x70, 0x73, 0x65, 0x72, 0x74, 0x12, 0x1c, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2e, 0x41, 0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x55, 0x70, 0x73,
	0x65, 0x72, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x2e, 0x41, 0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x55, 0x70, 0x73, 0x65, 0x72,
	0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4d, 0x0a, 0x0e, 0x41, 0x43, 0x4c,
	0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x1c, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x73, 0x2e, 0x41, 0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2e, 0x41, 0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x47, 0x0a, 0x0c, 0x41, 0x43, 0x4c, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x1a, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x41, 0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x41, 0x43, 0x4c,
	0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x43, 0x0a, 0x0c, 0x41, 0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x4c, 0x69, 0x73,
	0x74, 0x12, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x1a, 0x1b, 0x2e, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2e, 0x41, 0x43, 0x4c, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x25, 0x5a, 0x23, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x72, 0x69, 0x62, 0x77, 0x6f, 0x72, 0x6b,
	0x73, 0x2f, 0x64, 0x6b, 0x72, 0x6f, 0x6e, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pro_proto_rawDescOnce sync.Once
	file_pro_proto_rawDescData = file_pro_proto_rawDesc
)

func file_pro_proto_rawDescGZIP() []byte {
	file_pro_proto_rawDescOnce.Do(func() {
		file_pro_proto_rawDescData = protoimpl.X.CompressGZIP(file_pro_proto_rawDescData)
	})
	return file_pro_proto_rawDescData
}

var file_pro_proto_msgTypes = make([]protoimpl.MessageInfo, 16)
var file_pro_proto_goTypes = []interface{}{
	(*Policy)(nil),                  // 0: types.Policy
	(*ACLPolicyUpsertRequest)(nil),  // 1: types.ACLPolicyUpsertRequest
	(*ACLPolicyUpsertResponse)(nil), // 2: types.ACLPolicyUpsertResponse
	(*ACLPolicyDeleteRequest)(nil),  // 3: types.ACLPolicyDeleteRequest
	(*ACLPolicyDeleteResponse)(nil), // 4: types.ACLPolicyDeleteResponse
	(*ACLPolicyInfoRequest)(nil),    // 5: types.ACLPolicyInfoRequest
	(*ACLPolicyInfoResponse)(nil),   // 6: types.ACLPolicyInfoResponse
	(*ACLPolicyListResponse)(nil),   // 7: types.ACLPolicyListResponse
	(*Token)(nil),                   // 8: types.Token
	(*ACLTokenUpsertRequest)(nil),   // 9: types.ACLTokenUpsertRequest
	(*ACLTokenUpsertResponse)(nil),  // 10: types.ACLTokenUpsertResponse
	(*ACLTokenDeleteRequest)(nil),   // 11: types.ACLTokenDeleteRequest
	(*ACLTokenDeleteResponse)(nil),  // 12: types.ACLTokenDeleteResponse
	(*ACLTokenInfoRequest)(nil),     // 13: types.ACLTokenInfoRequest
	(*ACLTokenInfoResponse)(nil),    // 14: types.ACLTokenInfoResponse
	(*ACLTokenListResponse)(nil),    // 15: types.ACLTokenListResponse
	(*emptypb.Empty)(nil),           // 16: google.protobuf.Empty
}
var file_pro_proto_depIdxs = []int32{
	0,  // 0: types.ACLPolicyUpsertRequest.policy:type_name -> types.Policy
	0,  // 1: types.ACLPolicyInfoResponse.policy:type_name -> types.Policy
	0,  // 2: types.ACLPolicyListResponse.policies:type_name -> types.Policy
	8,  // 3: types.ACLTokenUpsertRequest.token:type_name -> types.Token
	8,  // 4: types.ACLTokenInfoResponse.token:type_name -> types.Token
	8,  // 5: types.ACLTokenListResponse.tokens:type_name -> types.Token
	1,  // 6: types.DkronPro.ACLPolicyUpsert:input_type -> types.ACLPolicyUpsertRequest
	3,  // 7: types.DkronPro.ACLPolicyDelete:input_type -> types.ACLPolicyDeleteRequest
	5,  // 8: types.DkronPro.ACLPolicyInfo:input_type -> types.ACLPolicyInfoRequest
	16, // 9: types.DkronPro.ACLPolicyList:input_type -> google.protobuf.Empty
	9,  // 10: types.DkronPro.ACLTokenUpsert:input_type -> types.ACLTokenUpsertRequest
	11, // 11: types.DkronPro.ACLTokenDelete:input_type -> types.ACLTokenDeleteRequest
	13, // 12: types.DkronPro.ACLTokenInfo:input_type -> types.ACLTokenInfoRequest
	16, // 13: types.DkronPro.ACLTokenList:input_type -> google.protobuf.Empty
	2,  // 14: types.DkronPro.ACLPolicyUpsert:output_type -> types.ACLPolicyUpsertResponse
	4,  // 15: types.DkronPro.ACLPolicyDelete:output_type -> types.ACLPolicyDeleteResponse
	6,  // 16: types.DkronPro.ACLPolicyInfo:output_type -> types.ACLPolicyInfoResponse
	7,  // 17: types.DkronPro.ACLPolicyList:output_type -> types.ACLPolicyListResponse
	10, // 18: types.DkronPro.ACLTokenUpsert:output_type -> types.ACLTokenUpsertResponse
	12, // 19: types.DkronPro.ACLTokenDelete:output_type -> types.ACLTokenDeleteResponse
	14, // 20: types.DkronPro.ACLTokenInfo:output_type -> types.ACLTokenInfoResponse
	15, // 21: types.DkronPro.ACLTokenList:output_type -> types.ACLTokenListResponse
	14, // [14:22] is the sub-list for method output_type
	6,  // [6:14] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_pro_proto_init() }
func file_pro_proto_init() {
	if File_pro_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pro_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Policy); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLPolicyUpsertRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLPolicyUpsertResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLPolicyDeleteRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLPolicyDeleteResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLPolicyInfoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLPolicyInfoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLPolicyListResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Token); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLTokenUpsertRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLTokenUpsertResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLTokenDeleteRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[12].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLTokenDeleteResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[13].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLTokenInfoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[14].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLTokenInfoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pro_proto_msgTypes[15].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ACLTokenListResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pro_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   16,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_pro_proto_goTypes,
		DependencyIndexes: file_pro_proto_depIdxs,
		MessageInfos:      file_pro_proto_msgTypes,
	}.Build()
	File_pro_proto = out.File
	file_pro_proto_rawDesc = nil
	file_pro_proto_goTypes = nil
	file_pro_proto_depIdxs = nil
}

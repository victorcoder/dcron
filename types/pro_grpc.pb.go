// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: pro.proto

package types

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// DkronProClient is the client API for DkronPro service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DkronProClient interface {
	ACLPolicyUpsert(ctx context.Context, in *ACLPolicyUpsertRequest, opts ...grpc.CallOption) (*ACLPolicyUpsertResponse, error)
	ACLPolicyDelete(ctx context.Context, in *ACLPolicyDeleteRequest, opts ...grpc.CallOption) (*ACLPolicyDeleteResponse, error)
	ACLPolicyInfo(ctx context.Context, in *ACLPolicyInfoRequest, opts ...grpc.CallOption) (*ACLPolicyInfoResponse, error)
	ACLPolicyList(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ACLPolicyListResponse, error)
	ACLTokenUpsert(ctx context.Context, in *ACLTokenUpsertRequest, opts ...grpc.CallOption) (*ACLTokenUpsertResponse, error)
	ACLTokenDelete(ctx context.Context, in *ACLTokenDeleteRequest, opts ...grpc.CallOption) (*ACLTokenDeleteResponse, error)
	ACLTokenInfo(ctx context.Context, in *ACLTokenInfoRequest, opts ...grpc.CallOption) (*ACLTokenInfoResponse, error)
	ACLTokenList(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ACLTokenListResponse, error)
}

type dkronProClient struct {
	cc grpc.ClientConnInterface
}

func NewDkronProClient(cc grpc.ClientConnInterface) DkronProClient {
	return &dkronProClient{cc}
}

func (c *dkronProClient) ACLPolicyUpsert(ctx context.Context, in *ACLPolicyUpsertRequest, opts ...grpc.CallOption) (*ACLPolicyUpsertResponse, error) {
	out := new(ACLPolicyUpsertResponse)
	err := c.cc.Invoke(ctx, "/types.DkronPro/ACLPolicyUpsert", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dkronProClient) ACLPolicyDelete(ctx context.Context, in *ACLPolicyDeleteRequest, opts ...grpc.CallOption) (*ACLPolicyDeleteResponse, error) {
	out := new(ACLPolicyDeleteResponse)
	err := c.cc.Invoke(ctx, "/types.DkronPro/ACLPolicyDelete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dkronProClient) ACLPolicyInfo(ctx context.Context, in *ACLPolicyInfoRequest, opts ...grpc.CallOption) (*ACLPolicyInfoResponse, error) {
	out := new(ACLPolicyInfoResponse)
	err := c.cc.Invoke(ctx, "/types.DkronPro/ACLPolicyInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dkronProClient) ACLPolicyList(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ACLPolicyListResponse, error) {
	out := new(ACLPolicyListResponse)
	err := c.cc.Invoke(ctx, "/types.DkronPro/ACLPolicyList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dkronProClient) ACLTokenUpsert(ctx context.Context, in *ACLTokenUpsertRequest, opts ...grpc.CallOption) (*ACLTokenUpsertResponse, error) {
	out := new(ACLTokenUpsertResponse)
	err := c.cc.Invoke(ctx, "/types.DkronPro/ACLTokenUpsert", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dkronProClient) ACLTokenDelete(ctx context.Context, in *ACLTokenDeleteRequest, opts ...grpc.CallOption) (*ACLTokenDeleteResponse, error) {
	out := new(ACLTokenDeleteResponse)
	err := c.cc.Invoke(ctx, "/types.DkronPro/ACLTokenDelete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dkronProClient) ACLTokenInfo(ctx context.Context, in *ACLTokenInfoRequest, opts ...grpc.CallOption) (*ACLTokenInfoResponse, error) {
	out := new(ACLTokenInfoResponse)
	err := c.cc.Invoke(ctx, "/types.DkronPro/ACLTokenInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dkronProClient) ACLTokenList(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ACLTokenListResponse, error) {
	out := new(ACLTokenListResponse)
	err := c.cc.Invoke(ctx, "/types.DkronPro/ACLTokenList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DkronProServer is the server API for DkronPro service.
// All implementations must embed UnimplementedDkronProServer
// for forward compatibility
type DkronProServer interface {
	ACLPolicyUpsert(context.Context, *ACLPolicyUpsertRequest) (*ACLPolicyUpsertResponse, error)
	ACLPolicyDelete(context.Context, *ACLPolicyDeleteRequest) (*ACLPolicyDeleteResponse, error)
	ACLPolicyInfo(context.Context, *ACLPolicyInfoRequest) (*ACLPolicyInfoResponse, error)
	ACLPolicyList(context.Context, *emptypb.Empty) (*ACLPolicyListResponse, error)
	ACLTokenUpsert(context.Context, *ACLTokenUpsertRequest) (*ACLTokenUpsertResponse, error)
	ACLTokenDelete(context.Context, *ACLTokenDeleteRequest) (*ACLTokenDeleteResponse, error)
	ACLTokenInfo(context.Context, *ACLTokenInfoRequest) (*ACLTokenInfoResponse, error)
	ACLTokenList(context.Context, *emptypb.Empty) (*ACLTokenListResponse, error)
	mustEmbedUnimplementedDkronProServer()
}

// UnimplementedDkronProServer must be embedded to have forward compatible implementations.
type UnimplementedDkronProServer struct {
}

func (UnimplementedDkronProServer) ACLPolicyUpsert(context.Context, *ACLPolicyUpsertRequest) (*ACLPolicyUpsertResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ACLPolicyUpsert not implemented")
}
func (UnimplementedDkronProServer) ACLPolicyDelete(context.Context, *ACLPolicyDeleteRequest) (*ACLPolicyDeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ACLPolicyDelete not implemented")
}
func (UnimplementedDkronProServer) ACLPolicyInfo(context.Context, *ACLPolicyInfoRequest) (*ACLPolicyInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ACLPolicyInfo not implemented")
}
func (UnimplementedDkronProServer) ACLPolicyList(context.Context, *emptypb.Empty) (*ACLPolicyListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ACLPolicyList not implemented")
}
func (UnimplementedDkronProServer) ACLTokenUpsert(context.Context, *ACLTokenUpsertRequest) (*ACLTokenUpsertResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ACLTokenUpsert not implemented")
}
func (UnimplementedDkronProServer) ACLTokenDelete(context.Context, *ACLTokenDeleteRequest) (*ACLTokenDeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ACLTokenDelete not implemented")
}
func (UnimplementedDkronProServer) ACLTokenInfo(context.Context, *ACLTokenInfoRequest) (*ACLTokenInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ACLTokenInfo not implemented")
}
func (UnimplementedDkronProServer) ACLTokenList(context.Context, *emptypb.Empty) (*ACLTokenListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ACLTokenList not implemented")
}
func (UnimplementedDkronProServer) mustEmbedUnimplementedDkronProServer() {}

// UnsafeDkronProServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DkronProServer will
// result in compilation errors.
type UnsafeDkronProServer interface {
	mustEmbedUnimplementedDkronProServer()
}

func RegisterDkronProServer(s grpc.ServiceRegistrar, srv DkronProServer) {
	s.RegisterService(&DkronPro_ServiceDesc, srv)
}

func _DkronPro_ACLPolicyUpsert_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ACLPolicyUpsertRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DkronProServer).ACLPolicyUpsert(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/types.DkronPro/ACLPolicyUpsert",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DkronProServer).ACLPolicyUpsert(ctx, req.(*ACLPolicyUpsertRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DkronPro_ACLPolicyDelete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ACLPolicyDeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DkronProServer).ACLPolicyDelete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/types.DkronPro/ACLPolicyDelete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DkronProServer).ACLPolicyDelete(ctx, req.(*ACLPolicyDeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DkronPro_ACLPolicyInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ACLPolicyInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DkronProServer).ACLPolicyInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/types.DkronPro/ACLPolicyInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DkronProServer).ACLPolicyInfo(ctx, req.(*ACLPolicyInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DkronPro_ACLPolicyList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DkronProServer).ACLPolicyList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/types.DkronPro/ACLPolicyList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DkronProServer).ACLPolicyList(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _DkronPro_ACLTokenUpsert_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ACLTokenUpsertRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DkronProServer).ACLTokenUpsert(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/types.DkronPro/ACLTokenUpsert",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DkronProServer).ACLTokenUpsert(ctx, req.(*ACLTokenUpsertRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DkronPro_ACLTokenDelete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ACLTokenDeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DkronProServer).ACLTokenDelete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/types.DkronPro/ACLTokenDelete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DkronProServer).ACLTokenDelete(ctx, req.(*ACLTokenDeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DkronPro_ACLTokenInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ACLTokenInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DkronProServer).ACLTokenInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/types.DkronPro/ACLTokenInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DkronProServer).ACLTokenInfo(ctx, req.(*ACLTokenInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DkronPro_ACLTokenList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DkronProServer).ACLTokenList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/types.DkronPro/ACLTokenList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DkronProServer).ACLTokenList(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// DkronPro_ServiceDesc is the grpc.ServiceDesc for DkronPro service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DkronPro_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "types.DkronPro",
	HandlerType: (*DkronProServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ACLPolicyUpsert",
			Handler:    _DkronPro_ACLPolicyUpsert_Handler,
		},
		{
			MethodName: "ACLPolicyDelete",
			Handler:    _DkronPro_ACLPolicyDelete_Handler,
		},
		{
			MethodName: "ACLPolicyInfo",
			Handler:    _DkronPro_ACLPolicyInfo_Handler,
		},
		{
			MethodName: "ACLPolicyList",
			Handler:    _DkronPro_ACLPolicyList_Handler,
		},
		{
			MethodName: "ACLTokenUpsert",
			Handler:    _DkronPro_ACLTokenUpsert_Handler,
		},
		{
			MethodName: "ACLTokenDelete",
			Handler:    _DkronPro_ACLTokenDelete_Handler,
		},
		{
			MethodName: "ACLTokenInfo",
			Handler:    _DkronPro_ACLTokenInfo_Handler,
		},
		{
			MethodName: "ACLTokenList",
			Handler:    _DkronPro_ACLTokenList_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pro.proto",
}

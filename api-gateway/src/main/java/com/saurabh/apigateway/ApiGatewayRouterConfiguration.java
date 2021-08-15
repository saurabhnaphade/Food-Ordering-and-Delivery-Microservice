package com.saurabh.apigateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//@Configuration
//public class ApiGatewayRouterConfiguration {
//	
//	@Bean
//	public RouteLocator gatewayRouter(RouteLocatorBuilder builder) {
//		return builder.routes()
//				.route(p -> p.path("/cust/**")
//						.uri("lb://customer-service"))
//				.build();
//	}
//
//}

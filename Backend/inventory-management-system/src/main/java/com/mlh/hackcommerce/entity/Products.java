package com.mlh.hackcommerce.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Products {
	
	@Id
	private Long id;
	
	@Column(nullable = false)
	private String itemName;
	
	@Lob
	private String itemDesc;
	
	@Column(nullable = false)
	private Double pricePerUnit;
	
	@Column(nullable = false)
	private Long unitsAvailable;
}
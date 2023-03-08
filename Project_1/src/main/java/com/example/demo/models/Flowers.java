package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Flowers 
{
	@Id
	private int custId;
	private String flowerName1;
	private String flowerName2;
	private float cost;
	private String purpose;
	private String orderDate;
	private String deliveryDate;
	private float discount;
	
	public int getCustId() 
	{
		return custId;
	}
	public void setCustId(int custId) 
	{
		this.custId = custId;
	}
	public String getFlowerName1() 
	{
		return flowerName1;
	}
	public void setFlowerName1(String flowerName1)
	{
		this.flowerName1 = flowerName1;
	}
	public String getFlowerName2() 
	{
		return flowerName2;
	}
	public void setFlowerName2(String flowerName2) 
	{
		this.flowerName2 = flowerName2;
	}
	public float getCost() 
	{
		return cost;
	}
	public void setCost(float cost)
	{
		this.cost = cost;
	}
	public String getPurpose() 
	{
		return purpose;
	}
	public void setPurpose(String purpose) 
	{
		this.purpose = purpose;
	}
	public String getOrderDate()
	{
		return orderDate;
	}
	public void setOrderDate(String orderDate) 
	{
		this.orderDate = orderDate;
	}
	public String getDeliveryDate()
	{
		return deliveryDate;
	}
	public void setDeliveryDate(String deliveryDate)
	{
		this.deliveryDate = deliveryDate;
	}
	public float getDiscount() 
	{
		return discount;
	}
	public void setDiscount(float discount) 
	{
		this.discount = discount;
	}
	
	@Override
	public String toString()
	{
		return "Flowers [custId=" + custId + ", flowerName1=" + flowerName1 + ", flowerName2=" + flowerName2
				+ ", cost=" + cost + ", purpose=" + purpose + ", orderDate=" + orderDate + ", deliveryDate=" 
				+ deliveryDate + ", discount=" + discount + "]";
	}
}

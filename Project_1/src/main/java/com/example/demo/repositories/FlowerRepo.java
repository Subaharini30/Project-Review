package com.example.demo.repositories;

//import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.models.Flowers;

@Repository
public interface FlowerRepo extends JpaRepository<Flowers, Integer>
{
//	public List<Flowers> findByFlowerName1(String flowerName1);
//	
//	public List<Flowers> findByFlowerName2(String flowerName2);
//	
//	public List<Flowers> findByOrderDate(String orderDate);
//	
//	public List<Flowers> findByDeliveryDate(String deliveryDate);

}

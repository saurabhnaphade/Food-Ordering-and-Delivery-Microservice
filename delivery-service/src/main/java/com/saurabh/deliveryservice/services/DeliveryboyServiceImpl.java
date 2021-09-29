package com.saurabh.deliveryservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saurabh.deliveryservice.daos.DeliveryboysDao;
import com.saurabh.deliveryservice.entities.Deliveryboy;

@Service
public class DeliveryboyServiceImpl implements DeliveryboyService{
	
	
	@Autowired
	private DeliveryboysDao dao;

	@Override
	public Deliveryboy findByEmail(String email) {
		return dao.findByEmail(email);
	}

	@Override
	public Deliveryboy save(Deliveryboy deliveryboy) {
		return dao.save(deliveryboy);
	}

	@Override
	public void deleteById(Integer id) {
		dao.deleteById(id);		
	}
	
	@Override
	public Deliveryboy authenticate(String email, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Deliveryboy findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Deliveryboy> findAll() {
		return dao.findAll();
	}

	@Override
	public void deleteByEmail(String email) {
		dao.deleteByEmail(email);
		
	}

}

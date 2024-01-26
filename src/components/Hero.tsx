

export default function Hero() {
    return (
        <>
            <div className='container-fluid p-5'>
                <h2 style={{ fontWeight: '700' }}>Welcome, Atul Kumar Singh!!</h2>
                <div className='row my-4'>

                    <div className="col-12 col-md-4">
                        <div className='card herocard px-3 py-4'>
                            <h5>Order Sycn Successful!</h5>
                            <p style={{ height: '100px' }}>Your order details from the last 30 days have been successfully synced. Check them out now!</p>

                            <div className="d-flex flex-row gap-3">
                                <button className='btn btn-sm btn-dark'>Explore Your Orders</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div style={{ backgroundColor: '#FFF8DB' }} className='card  herocard px-3 py-4'>
                            <h5>Customize Customer Notification</h5>
                            <p style={{ height: '100px' }}>Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>

                            <div className="d-flex flex-row gap-3">
                                <button className='btn btn-sm btn-dark'>Configure Notifications</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div style={{ backgroundColor: '#EAF4FF' }} className='card herocard px-3 py-4'>
                            <h5>Your tracking link has been generated</h5>
                            <p style={{ height: '100px' }}>Include the <a href='#'>Link</a> to Your Store's Navigation Menu.</p>

                            <div className="d-flex flex-row gap-3">
                                <button className='btn btn-sm btn-light'>copy link</button>
                                <button className='btn btn-sm btn-dark'>Go to Navigation Menu</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

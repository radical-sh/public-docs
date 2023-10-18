
import { Cards, Card } from 'nextra/components'

export const EcomBenefits = () => {
    return (
        <>
            <Cards>
                <Card title={
                    <div className='card-container'>
                        <div className='card-svc-header'>
                            <div>Order Service</div>
                            <div>80%</div>
                        </div>
                        <div className='card-divider'></div>
                        <div className="progress-container">
                            <div className="progress-bar">
                                <div className="progress progress-bar-80"></div>
                            </div>
                        </div>
                    </div>} href="#" />
                <Card title={<div  className='card-container'>
                    <div className='card-svc-header'>
                        <div>Delivery Service</div>
                        <div>60%</div>
                    </div>
                    <div className='card-divider'></div>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress progress-bar-60"></div>
                        </div>
                    </div>
                </div>} href="#" />
                <Card title={<div  className='card-container'>
                    <div className='card-svc-header'>
                        <div>Notification Service</div>
                        <div>50%</div>
                    </div>
                    <div className='card-divider'></div>
                    <div className="progress-container">
                        <div className="progress-bar">
                            <div className="progress progress-bar-50"></div>
                        </div>
                    </div>
                </div>} href="#" />
            </Cards>


            <Cards>
                <Card title={
                    <div className='card-container'>
                        <div className="green-font-highlight text-center" >2x</div>
                        <div className='text-center'>Developer Productivity</div>
                    </div>} href="#" />
                <Card title={<div className='card-container'>
                    <div className="red-font-highlight text-center"  >- 50%</div>
                    <div  className='text-center'>Time to Market</div>
                </div>} href="#" />
                <Card title={<div className='card-container'>
                    <div className="green-font-highlight text-center" >2x</div>
                    <div className='text-center'>Collaboration</div>
                </div>} href="#" />
            </Cards>
        </>
    )
}
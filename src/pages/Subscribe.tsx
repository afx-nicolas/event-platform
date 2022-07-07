import { CircleNotch } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

import codeMockup from '../assets/code-mockup.png';

export function Subscribe() {
	const navigate = useNavigate();

	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');

	const [ createSubscriber, { loading } ] = useCreateSubscriberMutation();

	const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

	const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

	const handleSubscribe = async (e: React.FormEvent) => {
		e.preventDefault();

		await createSubscriber({
			variables: {
				name,
				email
			}
		});

		navigate('/event');
	}

	return (
		<div className="flex flex-col w-full min-h-screen">
			<main className="flex flex-1">
				<div className="flex-1 bg-blur bg-cover bg-no-repeat flex flex-col items-center sm:px-4 md:px-8">
					<section className="w-full max-w-[1100px] flex flex-col items-center gap-16 justify-between mt-20 mx-auto lg:flex-row lg:gap-8">
						<div className="flex flex-col max-w-[640px] items-center lg:items-start px-6 sm:px-0">
							<Logo />
							<h1 className="text-3xl sm:text-[2.5rem] mt-8 leading-tight text-center lg:text-left">
								Construa uma
								<strong className="text-blue-500 font-bold"> aplicação completa</strong>, do zero, com
								<strong className="text-blue-500 font-bold"> React</strong>
							</h1>
							<p className="mt-6 text-sm sm:text-base text-center lg:text-left">
								Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
							</p>
						</div>
						<div className="w-full max-w-[400px] p-8 bg-gray-700 border border-gray-500 rounded">
							<strong className="text-lg sm:text-2xl">Inscreva-se gratuitamente</strong>
							<form onSubmit={handleSubscribe} className="flex flex-col mt-6 gap-6">
								<div className="flex flex-col gap-2">
									<input
										type="text"
										placeholder="Digite seu nome completo"
										value={name}
										onChange={handleNameInput}
										required
										className="border border-transparent rounded bg-gray-900 outline-none p-5 focus:border focus:border-green-500 transition-colors"
									/>
									<input
										type="email"
										placeholder="Digite seu e-mail"
										value={email}
										onChange={handleEmailInput}
										required
										className="border border-transparent rounded bg-gray-900 outline-none p-5 focus:border focus:border-green-500 transition-colors"
									/>
								</div>
								<button
									type="submit"
									disabled={loading}
									className="rounded bg-green-500 text-white font-bold p-4 text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-green-500"
								>
									{ loading ? <CircleNotch size={20} className="animate-spin mx-auto" /> : "Garantir minha vaga" }
								</button>
							</form>
						</div>
					</section>
					<img className="select-none" src={codeMockup} alt="" />
				</div>
			</main>
			<Footer />
		</div>
	);
};
